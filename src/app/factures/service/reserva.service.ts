import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../../shared/models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private rvUrl = 'http://localhost:8080/reserva';

  constructor(private http: HttpClient) { }

  allListReservas():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.rvUrl}/admin/list-reserva`)
  }

}
