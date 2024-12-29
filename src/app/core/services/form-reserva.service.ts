import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormReservaService {
  constructor(
    private fb: FormBuilder,
  ) {}
  createReserva(): FormGroup {
    return this.fb.group({
      fecha: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
      dniCliente: ['', [Validators.required]],
      campoFutbol: ['', [Validators.required]]   
    });
  }

  setDefaultCampoId(form: FormGroup, campoId: number):void{
    form.patchValue({campoFutbol: campoId});
  }

  setDefaultClientDni(form: FormGroup):void {
    const dniCliente = localStorage.getItem('dni');
    if(dniCliente) {
      form.patchValue({dniCliente: +dniCliente});
    }
  }
}
