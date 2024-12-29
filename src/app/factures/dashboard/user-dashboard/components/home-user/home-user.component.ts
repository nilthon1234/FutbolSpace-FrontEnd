import { Component, OnInit } from '@angular/core';
import { UsuarioNavbarComponent } from "../../../../../shared/components/navbars/usuario-navbar/usuario-navbar.component";
import { Router, } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../../../shared/models/usuario';
import { CampoFutbolService } from '../../../../service/campo-futbol.service';
import { CampoFutbol } from '../../../../../shared/models/campoFutbol';
import { FileService } from '../../../../service/file.service';

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [UsuarioNavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    password: '',
    dni: 0,
    phone: 0,
    estado: 'Activo',
    campoFutbol: [],
  };
  //my formulario
  formCampo: FormGroup;
  //formularioVisible
  formularioVisible: boolean = false;

  //my forms Imagen
  formFile: FormGroup;
  VisibleImageForm: boolean = false


  constructor(
    private fileService: FileService,
    private userService: UsuarioService,
    private campoFutbolService: CampoFutbolService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.formCampo = this.fb.group({
      dniUse: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      address: ['', [Validators.required]],
      description: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      district: ['', [Validators.required]],
    });

    this.formFile = this.fb.group({
      idCampoFutbol: ['', Validators.required],
      imagen1: ['', Validators.required],
      imagen2: ['', Validators.required],
      imagen3: ['', Validators.required],
    })
  }

  logout(): void {
    this.userService.logoutUsu();
    this.router.navigate(['login-user']);
    this.toastr.info('Sesion Cerrada Correctamente');
  }

  ngOnInit(): void {

    const dni = Number(localStorage.getItem('dni'));
    if (dni) {
      this.userService.getUsuarioByDni(dni).subscribe({
        next: (data: Usuario) => {
          this.usuario = data;
        },
        error: (error) => {
          this.toastr.error('error al listar los detalles del usuario', error);
          console.log(this.usuario);

        }
      })
    }

  }

  mostrarFormulario(): void {
    const dni = Number(localStorage.getItem('dni'));
    if (dni) {
      this.formCampo.patchValue({ dniUse: dni });
    }
    this.formularioVisible = true;
  }

  ocultarFormulario(): void {
    this.formularioVisible = false
  }

  showFormImage(campoId: number): void {
    this.formFile.patchValue({ idCampoFutbol: campoId });
    this.VisibleImageForm = true;
  }
  hideFormImage(): void {
    this.VisibleImageForm = false;
  }

  agregarCampo(): void {
    if (this.formCampo.valid) {
      const campofut: CampoFutbol = this.formCampo.value;
      this.campoFutbolService.addCampoFutbol(campofut).subscribe(
        () => {
          // Refresh list User
          const dni = Number(localStorage.getItem('dni'));
          if (dni) {
            this.userService.getUsuarioByDni(dni).subscribe({
              next: (data: Usuario) => {
                this.usuario = data;
                this.toastr.success('Campo de Fútbol agregado');
                this.formularioVisible = false;
                this.formCampo.reset();
              },
              error: (error) => {
                this.toastr.error('Error al actualizar los detalles del usuario', error);
              }
            });
          }
        },
      );
    } else {
      this.toastr.error('Error al registrar Campo de Fútbol');
    }
  }

  addFile(): void {
    if (this.formFile.valid) {
      const formData = new FormData();
      const idCampoFutbol = this.formFile.get('idCampoFutbol')?.value;

      if (idCampoFutbol !== undefined) {
        formData.append('idCampoFutbol', idCampoFutbol);

        const imagen1 = this.formFile.get('imagen1')?.value;
        const imagen2 = this.formFile.get('imagen2')?.value;
        const imagen3 = this.formFile.get('imagen3')?.value;

        if (imagen1) formData.append('imagenes', imagen1);
        if (imagen2) formData.append('imagenes', imagen2);
        if (imagen3) formData.append('imagenes', imagen3);

        this.fileService.addFile(formData).subscribe(
          ()=> {
            const dni = Number(localStorage.getItem('dni'));
            if (dni) {
              this.userService.getUsuarioByDni(dni).subscribe({
                next: (data: Usuario) => {

                  this.usuario = data
                  this.toastr.success('Imágenes agregadas correctamente');
                  this.VisibleImageForm = false;
                  this.formFile.reset();

                },
                error: (error) => {
                  this.toastr.error('Error al agregar imágenes', error);
                },
              });
            };
          }
          

        );
      } else {
        this.toastr.error('ID Campo Fútbol no encontrado');
      };
    } else {
      this.toastr.error('Formulario no válido');
    }
  }
  
  hasImages(campo: CampoFutbol): boolean {
    return !!campo.fileImagen && campo.fileImagen.length > 0;
}

  


  //configuracion para los archivos 
  onFileChange(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formFile.patchValue({
        [controlName]: file
      });
    }
  }


}
