import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../../../service/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { Client } from '../../../../../shared/models/client';
import { LoginResponse } from '../../../../../shared/models/loginRequest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './client-login.component.html',
  styleUrl: './client-login.component.css'
})
export class ClientLoginComponent {
  

  cliForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private toastr: ToastrService,
    private router: Router,
  ){
    this.cliForm = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    if(this.cliForm.valid){
      const loginClient: Client = this.cliForm.value;
      this.clientService.loginClient(loginClient).subscribe(
        {
          next: (response: LoginResponse) =>{
            if(response.success){
              localStorage.setItem('dni', loginClient.dni.toString())
              this.toastr.success(response.success, 'EXITO')
              this.router.navigate(['reserva-client']);
            }
          },
          error:(error) => {
            if(error.status === 406){
              this.toastr.error(error.error.error)
            }
          }
        }
      )
    }else {
      this.toastr.warning('Por Favor, Complete todo los campos', 'ADVERTENCIA')
    }
  }


}
