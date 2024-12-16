import { Component, OnInit } from '@angular/core';
import { CampoFutbolService } from '../../../../service/campo-futbol.service';
import { CampoFutbol } from '../../../../../shared/models/campoFutbol';
import { ActivatedRoute, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isSameDay, addDays, parseISO } from 'date-fns';
import { AddReservaComponent } from "../add-reserva/add-reserva.component";

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

  //mostrar formulario
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
  
  openModel(){
    this.showModel = true;

  }
  closeModel(){
    this.showModel = false;
  }
  //para actualizar los detalles al  resrvar un nuevo reserva
  actualizarReservas(nuevaReserva: any) {
    const id = this.campoFutbol.id;
    if (id) {
      this.campoFutbolService.getCampoAndReserva(id).subscribe(
        (data: CampoFutbol) => {
          this.campoFutbol = data; // Actualiza con los datos del backend
        },
        (error) => {
          console.error('Error al actualizar reservas:', error);
        }
      );
    }
  }
  
  


  //para las  fechas intall consola { npm install date-fns }
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