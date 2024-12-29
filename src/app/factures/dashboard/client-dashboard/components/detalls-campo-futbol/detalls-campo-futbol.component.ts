import { Component, OnInit } from '@angular/core';
import { CampoFutbolService } from '../../../../service/campo-futbol.service';
import { CampoFutbol } from '../../../../../shared/models/campoFutbol';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isSameDay, addDays, parseISO } from 'date-fns';
import { AddReservaComponent } from "../add-reserva/add-reserva.component";
import { Reserva } from '../../../../../shared/models/reserva';

@Component({
  selector: 'app-detalls-campo-futbol',
  standalone: true,
  imports: [CommonModule, AddReservaComponent],
  templateUrl: './detalls-campo-futbol.component.html',
  styleUrls: ['./detalls-campo-futbol.component.css']
})
export class DetallsCampoFutbolComponent implements OnInit {
  campoFutbol: CampoFutbol = {
    id: 0,
    dniUse: 0,
    address: '',
    description: '',
    city: '',
    province: '',
    district: '',
    estado: '',
    reservas: [],
    fileImagen: [],
  };

  showModel: boolean = false;

  constructor(
    private campoFutbolService: CampoFutbolService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.campoFutbolService.getCampoAndReserva(+id).subscribe(
        (data: CampoFutbol) => {
          this.campoFutbol = data;
        },
        (error) => {
          console.error('error:', error);
        }
      );
    }
  }

  openModel() {
    this.showModel = true;
  }

  closeModel() {
    this.showModel = false;
  }

  actualizarPagina(nuevaReserva: any) {
    const id = this.campoFutbol.id;
    if (id) {
      this.campoFutbolService.getCampoAndReserva(id).subscribe(
        (data: CampoFutbol) => {
          this.campoFutbol = data;
        },
        (error) => {
          console.error('Error al actualizar reservas:', error);
        }
      );
    }
  }

  getReservasByDay() {
    return {
      today: this.campoFutbol.reservas?.filter(reserva => this.isToday(reserva.fecha)),
      tomorrow: this.campoFutbol.reservas?.filter(reserva => this.isTomorrow(reserva.fecha)),
      dayAfterTomorrow: this.campoFutbol.reservas?.filter(reserva => this.isDayAfterTomorrow(reserva.fecha))
    };
  }

  isToday(date: string): boolean {
    const today = new Date();
    return isSameDay(parseISO(date), today);
  }

  isTomorrow(date: string): boolean {
    const tomorrow = addDays(new Date(), 1);
    return isSameDay(parseISO(date), tomorrow);
  }

  isDayAfterTomorrow(date: string): boolean {
    const dayAfterTomorrow = addDays(new Date(), 2);
    return isSameDay(parseISO(date), dayAfterTomorrow);
  }
}