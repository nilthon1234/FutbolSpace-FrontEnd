import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampoFutbol } from '../../shared/models/campoFutbol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampoFutbolService {
  private cfURL = 'http://localhost:8080/campo'
  constructor(private http: HttpClient) { }

  //para lado de los administradores
  campoAllList():Observable<CampoFutbol[]>{
    return this.http.get<CampoFutbol[]>(`${this.cfURL}/admin/list`)
  }

  updateEstado(campoFutbol: CampoFutbol):Observable<any>{
    return this.http.put(`${this.cfURL}/admin/actus/${campoFutbol.id}`, campoFutbol);
  }
}
