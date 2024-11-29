import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Administrator } from '../../../shared/models/administrator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  adminForms: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private toastr: ToastrService,
    private router: Router,
  ){
    this.adminForms = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      phone: ['',Validators.required],
      role: ['',Validators.required],

    });

  }
  onSubmit(): void{
    if(this.adminForms.valid){
      const admin: Administrator = this.adminForms.value;
      this.authService.registerAdmin(admin).subscribe(
        (response) => {
          console.log('Registro exitoso',response)
          this.toastr.success(response)
          this.router.navigate(['/login-admin']);
        },
        (error) => {
          console.error('Error', error);
          this.toastr.error('error al registrar')
        }
      );

    }else{
      this.toastr.warning('complete todo los campos');
    }
  }

}
