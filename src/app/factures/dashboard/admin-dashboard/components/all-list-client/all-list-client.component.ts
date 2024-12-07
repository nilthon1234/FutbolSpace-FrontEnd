import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../../../../shared/models/client';
import { ClientService } from '../../../../service/client.service';
import { error } from 'console';
import { AdminNavbarComponent } from "../../../../../shared/components/navbars/admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-all-list-client',
  standalone: true,
  imports: [FormsModule, CommonModule, AdminNavbarComponent],
  templateUrl: './all-list-client.component.html',
  styleUrl: './all-list-client.component.css'
})
export class AllListClientComponent implements OnInit {
  listClien: Client[] = [];

  ngOnInit(): void {
    this.getClient();
      
  }
  constructor(
    private clienService: ClientService,
  ){}

  getClient():void{
    this.clienService.AllListClient().subscribe(
      (data: Client[]) => {
        this.listClien = data
      },
      error => {
        console.error('error al listar cliente', error)
      }
    )
  }
}
