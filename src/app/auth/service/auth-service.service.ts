import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrator } from '../../shared/models/administrator';
import { LoginRequest } from '../../shared/models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authUrl = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }
  registerAdmin(admin: Administrator):Observable<any>{
    return this.http.post(`${this.authUrl}/register`, admin,{responseType: 'text'});
  }

  login(request: LoginRequest){
    return this.http.post(`${this.authUrl}/token`, request)
  }

  storeToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    if(typeof window !== 'undefined' && localStorage){
      return localStorage.getItem('token');
    }
    return null;
  }

  isLoggedIn():boolean {
    return !!this.getToken();
  }
  logout(): void {
    localStorage.removeItem('token')
  }

  
}
