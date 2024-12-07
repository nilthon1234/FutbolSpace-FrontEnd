import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../../shared/models/usuario';
import { LoginResponse } from '../../shared/models/loginRequest';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlUso = 'http://localhost:8080/usuario';
  private isAuthenticated = false;
  constructor(private http: HttpClient) { }

  //para lado de los administradores
  usuarioAllList():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.urlUso}/admin/allList`)
  }
  actusAcc(usuario: Usuario, ):Observable<any>{
    return this.http.put(`${this.urlUso}/admin/actus/${usuario.id}`, usuario)
  }

  //para lado de los usuarios

  isAuthenticateds(): boolean {
    return this.isAuthenticated;
  }

  logoutUsu():void{
    this.isAuthenticated = false;
    localStorage.removeItem('dni');
  }

  registerUsu(usu: Usuario):Observable<any>{
    return this.http.post<any>(`${this.urlUso}/usu/register`, usu)

  }
  loginUsu(usu: Usuario): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.urlUso}/usu/login`, usu).pipe(
      tap(response => {
        if(response.success){
          this.isAuthenticated = true;
          localStorage.setItem('dni', usu.dni.toString());
        }
      })
    )
  }

  getUsuarioByDni(dni: number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlUso}/usu/${dni}`);
  }


}
