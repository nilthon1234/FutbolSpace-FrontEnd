import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../../../service/client.service';
import { Router, RouterLink } from '@angular/router';
import { Client } from '../../../../../shared/models/client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-register',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink],
  templateUrl: './client-register.component.html',
  styleUrl: './client-register.component.css'
})
export class ClientRegisterComponent {

  cliForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private toastr: ToastrService,
  ){

    this.cliForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['',[Validators.required,Validators.pattern(/^\d+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  registerClient():void{
    if(this.cliForm.valid){
      const cli: Client = this.cliForm.value;
      this.clientService.register(cli).subscribe(
        () =>{
          this.router.navigate(['login-client'])
          this.toastr.success('Registro exitoso', 'Exitoso')
        },
        () => {
          this.toastr.error('Error al registrar', 'ERROR')
        }
      )
    }
    else{
      this.toastr.warning('complete los campos', 'INCOMPLETO')
    }
  }

}
