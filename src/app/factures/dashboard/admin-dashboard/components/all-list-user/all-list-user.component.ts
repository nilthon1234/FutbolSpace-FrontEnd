import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../../../../../shared/components/navbars/admin-navbar/admin-navbar.component";
import { Usuario } from '../../../../../shared/models/usuario';
import { UsuarioService } from '../../../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-list-user',
  standalone: true,
  imports: [AdminNavbarComponent, CommonModule, FormsModule],
  templateUrl: './all-list-user.component.html',
  styleUrl: './all-list-user.component.css'
})
export class AllListUserComponent implements OnInit{
  usuData: Usuario[] = []

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
  ){}

  ngOnInit(): void {
    this.AllListUsuario();
    
      
  }

  AllListUsuario():void{
    this.usuarioService.usuarioAllList(). subscribe(
      (data: Usuario[]) =>{
        this.usuData = data
      },
      error => {
        console.error('Error al listar', error)
      }
    );
  }

  updateEstado(usuario: Usuario):void{
    this.usuarioService.actusAcc(usuario).subscribe(
      {
        next: () => {
          alert(`el estado del usuario ${usuario.email} se actualizo a ${usuario.estado}`)
        },
        error: (err) => {
          console.error('error al actualizar', err)
        }
      }
    )
    
  }


}
