import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
import { LoginRequest } from '../../../shared/models/loginRequest';
import { response } from 'express';
import { ResponseLogin } from '../../../shared/models/responseToken';
import { ThisReceiver } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit {
  requestLogin: LoginRequest = {};
  loginForm: FormGroup;

ngOnInit(): void {
    
}
  constructor(
    private authService: AuthServiceService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login-admin');
  }

  login() {
    if (this.loginForm.valid) {
      const loginData: LoginRequest = this.loginForm.value; // Extrae valores del formulario
      this.authService.login(loginData).subscribe({
        next: (response: ResponseLogin) => {
          if (response.token) {
            this.authService.storeToken(response.token);
            this.router.navigate(['list-campofutbol']); // Redirige al listado
            this.toastr.success('Login exitoso', 'ÉXITO');
          } else {
            this.toastr.error('No se recibió un token válido', 'ERROR');
          }
        },
        error: (err) => {
          this.toastr.error('Credenciales inválidas o error de autenticación', 'ERROR');
          console.error(err);
        },
      });
    } else {
      this.toastr.error('Por favor, complete todos los campos correctamente.', 'ERROR');
    }
  }
  

}
