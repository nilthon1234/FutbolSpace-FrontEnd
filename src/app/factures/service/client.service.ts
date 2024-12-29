import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Client } from '../../shared/models/client';
import { LoginResponse } from '../../shared/models/loginRequest';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private cliUrl = 'http://localhost:8080/public';
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }



  AllListClient():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.cliUrl}/admin/list-client`)
  }

  isAuthenticateds(): boolean {
    return this.isAuthenticated;
  }
  //eliminar el dni del local store
  logoutClient():void{
    this.isAuthenticated = false;
    localStorage.removeItem('dni');
  }

  register(client: Client):Observable<Client>{
    return this.http.post<Client>(`${this.cliUrl}/client/register`, client)
  }

  loginClient(client: Client):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.cliUrl}/client/login`, client).pipe(
      tap(response => {
        if(response.success){
          this.isAuthenticated = true;
          localStorage.setItem('dni', client.dni.toString());
        }
      })
    )
  }
  getClientReservaAndCampo(dni: number):Observable<Client>{
    return this.http.get<Client>(`${this.cliUrl}/client/${dni}`)
  }

}
