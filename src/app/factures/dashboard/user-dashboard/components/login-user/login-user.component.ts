import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest, LoginResponse } from '../../../../../shared/models/loginRequest';
import { UsuarioService } from '../../../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../../../shared/models/usuario';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  requestLogin: LoginRequest = {};
  loginForm: FormGroup;

  constructor(
    private userService: UsuarioService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ){
    this.loginForm = this.fb.group({
      dni: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  login() {
    if (this.loginForm.valid) {
      const loginData: Usuario = this.loginForm.value;
      this.userService.loginUsu(loginData).subscribe({
        next: (response: LoginResponse) => {
          // Este bloque next ya no se ejecutará para errores HTTP
          if (response.success) {
            //guradamos el dni en localStore
            localStorage.setItem('dni', loginData.dni.toString())
            this.toastr.success(response.success, 'Éxito');
            this.router.navigate(['home-user']);
          }
        },
        error: (error) => {
          // Manejo de diferentes códigos de error HTTP
          if (error.status === 401) {
            // No tiene acceso
            this.toastr.warning(error.error.not_access,'Acceso denegado');
          } else if (error.status === 406) {
            // Credenciales incorrectas
            this.toastr.error(error.error.error);
          }
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos', 'Campos Incompletos');
    }
  }
  

}
