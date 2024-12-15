import { Component, OnInit } from '@angular/core';
import { CampoFutbol } from '../../../../../shared/models/campoFutbol';
import { CampoFutbolService } from '../../../../service/campo-futbol.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.css'
})
export class HomeClientComponent implements OnInit {

  listCampo: CampoFutbol[] = []

  constructor(
    private campoFutbolService: CampoFutbolService,
    private route: Router,
  ){}

  ngOnInit(): void {
    this.getListHabilitadas();

  }
  getListHabilitadas():void{
    this.campoFutbolService.listHabilitadas().subscribe (
      (data: CampoFutbol[]) => {
        this.listCampo = data;
      },
      error => {
        console.error('erro al listar ', error)
      }
    )
  }
  seeDetails(id: number):void{
    this.route.navigate(['/campo-details', id]);
  }
  

}
