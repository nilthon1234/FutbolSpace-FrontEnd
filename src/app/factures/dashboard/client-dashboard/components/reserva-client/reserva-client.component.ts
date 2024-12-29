import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../../shared/models/client';
import { ClientService } from '../../../../service/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reserva-client.component.html',
  styleUrl: './reserva-client.component.css'
})
export class ReservaClientComponent implements OnInit {
  client: Client = {
    id: '',
    name: '',
    lastname: '', 
    dni: 0,     
    phone: 0,  
    email: '',    
    password: '', 
    reservas: [],

  }
  
  constructor(
    private clientService: ClientService,
    private toastr: ToastrService,
    private router: Router
  ){}
  ngOnInit(): void {

    const dni = Number(localStorage.getItem('dni'));
    if(dni){
      this.clientService.getClientReservaAndCampo(dni).subscribe({
        next: (data: Client) =>{
          this.client = data;

          if(this.client.reservas && this.client.reservas.length > 0){
            this.client.reservas.sort((a, b) => b.id - a.id);
          }
        },
        error: (error) => {
          console.log(this.client);
        }
      })
    }


  }

}
