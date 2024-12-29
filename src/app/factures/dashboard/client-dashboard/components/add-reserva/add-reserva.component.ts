import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../../../../service/reserva.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../../../../shared/models/reserva';
import { FormReservaService } from '../../../../../core/services/form-reserva.service';
import { NotificationService } from '../../../../../core/services/notification.service';
import { DateUtilService } from '../../../../../core/services/date-util.service';

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
  //para actualizar la pagina despues de agregar la reserva
  @Output() reservaAgregada = new EventEmitter<void>();

  //para el minimo de hoy en andelante [fecha]
  minDate: string = '0';
  //para las horas de 00
  horas: string[] = [];

  formReserva: any;
  constructor(
    private reservaFormService:FormReservaService,
    private reservaService: ReservaService,
    private notificationService: NotificationService,
    private dateUtilService: DateUtilService
  ) {
    // Delegate form creation to form service
    this.formReserva = this.reservaFormService.createReserva();
    
    // Generate hours via date utility
    this.horas = this.dateUtilService.generateHoraList();
    
    // Set minimum date
    this.minDate = this.dateUtilService.getTodayMinDate();
  }

  ngOnInit(): void {
    this.initializeFormDefaults();
  }

  private initializeFormDefaults(): void {
    // Separate method for initializing form defaults
    this.reservaFormService.setDefaultCampoId(this.formReserva, this.campoId);
    this.reservaFormService.setDefaultClientDni(this.formReserva);
  }

  close(): void {
    this.closeModel.emit();
  }

  addReservas(): void {
    if (this.formReserva.valid) {
      this.reservaService.addReserva(this.formReserva.value).subscribe({
        next: this.handleSuccessfulReservation.bind(this),
        error: this.handleReservationError.bind(this)
      });
    } else {
      this.notificationService.showWarning('Campos incompletos', 'INCOMPLETO');
    }
  }

  private handleSuccessfulReservation(response: any): void {
    this.notificationService.showSuccess('Tu reserva fue registrada', 'EXITOSO');
    this.reservaAgregada.emit(response);
    this.close();
  }

  private handleReservationError(err: any): void {
    if (err.error && typeof err.error.message === 'string') {
      this.notificationService.showWarning(err.error.message, 'Advertencia');
    }
  }
  

} 