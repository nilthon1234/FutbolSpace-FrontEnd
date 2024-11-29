import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../../auth/service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //obtener el token
    const token = this.authService.getToken();
    //clonacion de la solicitud
    const authReq = token? 
        req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        }) 
      : req;

    return next.handle(authReq);
  }
}