import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reserva } from '../../../../../shared/models/reserva';
import { ReservaService } from '../../../../service/reserva.service';
import { error } from 'console';
import { AdminNavbarComponent } from "../../../../../shared/components/navbars/admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-all-list-reserva',
  standalone: true,
  imports: [FormsModule, CommonModule, AdminNavbarComponent],
  templateUrl: './all-list-reserva.component.html',
  styleUrl: './all-list-reserva.component.css'
})
export class AllListReservaComponent implements OnInit {

  allList: Reserva[] = [];

  constructor(
    private reservaService: ReservaService,
  ){}

  ngOnInit(): void {
      this.getReservas();
  }

  getReservas():void{
    this.reservaService.allListReservas().subscribe(
      (data: Reserva[]) => {
        this.allList = data
      },
      err => {
        console.error('erro al listar', err)

      }
    )
  }
}
