import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../../../../../shared/components/navbars/admin-navbar/admin-navbar.component";
import { CampoFutbol } from '../../../../../shared/models/campoFutbol';
import { CampoFutbolService } from '../../../../service/campo-futbol.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-list-campo-futbol',
  standalone: true,
  imports: [AdminNavbarComponent, FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './all-list-campo-futbol.component.html',
  styleUrl: './all-list-campo-futbol.component.css'
})
export class AllListCampoFutbolComponent implements OnInit{

  campoFutbol: CampoFutbol[] = [];
  

  constructor(
    private campoFutbolService: CampoFutbolService,
    private router: Router,
    private toastr: ToastrService,

  ){}
ngOnInit(): void {
    this.listAllCampoFutbol();
}




listAllCampoFutbol():void{
  this.campoFutbolService.campoAllList().subscribe(
    (data: CampoFutbol[]) => {
      this.campoFutbol = data
    },
    error => {
      console.error('Error al listar', error)
    }
  );

};
updateEstado(campoFutbol: CampoFutbol): void{
  this.campoFutbolService.updateEstado(campoFutbol).subscribe(
    {
      next: () => {
        alert(`el estado del campo ${campoFutbol.dniUse} se actualizo a ${campoFutbol.estado}`)
      },
      error: (err) => {
        console.error('error al actualizar', err)
      }
    }
  );
}


}
