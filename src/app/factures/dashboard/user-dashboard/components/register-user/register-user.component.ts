import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../../../shared/models/usuario';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  
  userForms: FormGroup;
  constructor(
    private  fb: FormBuilder,
    private userService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
  ){
    this.userForms = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      dni: ['',[Validators.required,Validators.pattern(/^\d+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],

    })
  }

  onSubmit():void{
    if(this.userForms.valid){
      const user: Usuario = this.userForms.value;
      this.userService.registerUsu(user).subscribe(
        (response) => {
          console.log('registro exitoso', response)
          this.toastr.success('Usuario Registrado', 'EXITOSO')
          this.router.navigate(['/login-user'])
        },
        (error) => {
          console.error('error', error);
          this.toastr.error('error al registrar', 'ERROR')
        }
      )
    }else {
      this.toastr.warning('Complete todo los campos', 'INCOMPLETO')
    }
  }

}
