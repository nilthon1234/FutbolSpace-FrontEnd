import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private flUrl = 'http://localhost:8080/file'
  constructor(private http: HttpClient
    
  ) { }

  addFile(formdData: FormData): Observable<any>{
    return this.http.post<any>(`${this.flUrl}/add`, formdData)
  }
}
