import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private cliUrl = 'http://localhost:8080/public';

  constructor(private http: HttpClient) { }

  AllListClient():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.cliUrl}/admin/list-client`)
  }

}
