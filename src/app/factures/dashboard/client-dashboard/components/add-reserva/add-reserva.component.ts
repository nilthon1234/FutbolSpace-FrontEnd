import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../../../../service/reserva.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-reserva',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],//[ReactiveFormsModule] formulario y [CommonModule] para los *gnFor
  templateUrl: './add-reserva.component.html',
  styleUrl: './add-reserva.component.css'
})
export class AddReservaComponent implements OnInit {
  @Input() campoId: number = 0;
  @Output() closeModel = new EventEmitter<void>();
  //para el minimo de hoy en andelante [fecha]
  minDate: string = '0';
  //para las horas de 00
  horas: string[] = [];

  formReserva: FormGroup;

  constructor(
    private reservaService: ReservaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {

    this.formReserva = this.fb.group({
      fecha: ['', [Validators.required,]],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
      dniCliente: ['', [Validators.required]],
      campoFutbol: ['', [Validators.required]]
    })

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.campoId = +params.get('id')! || 0; // El nombre de tu parámetro en la ruta
      this.formReserva.patchValue({ campoFutbol: this.campoId });
    });

    //extraer el dni
    const dniCliente = localStorage.getItem('dni');
    if (dniCliente) {
      this.formReserva.patchValue({ dniCliente: +dniCliente });
    }
    //fecha disponible de hoy en adelante 
    const today = new Date();
    //agustes de fecha zona Horari local
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
    this.minDate = today.toISOString().split('T')[0];
    //generar las horas de 00 
    this.horas = Array.from({ length: 24 }, (_, i) => {
      return `${i.toString().padStart(2, '0')}:00`;
    });

  }

  close() {
    this.closeModel.emit();
  }

  //formulario
  addReservas() {
    if (this.formReserva.valid) {
      const reserva = this.formReserva.value;
      this.reservaService.addReserva(reserva).subscribe({
        next: () => {
          this.toastr.success('Tu reserva fue registrata', 'EXITOSO');
          this.close();
        },
        error: (err) => {
          if(err.error && typeof err.error === 'string'){
            this.toastr.error(err.error, 'Error');
          }else if(err.error && err.error.message) {
            this.toastr.warning(err.error.message, 'Advertencia')
          }
        }
      })
    } else {
      this.toastr.warning('Campos incompletos', 'INCOMPLETO');
    }

  }
  

}
