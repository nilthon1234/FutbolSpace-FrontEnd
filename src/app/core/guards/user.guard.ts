import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../../factures/service/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(): boolean {  
    if (this.usuarioService.isAuthenticateds()) {
      return true;
    } else {
      this.router.navigate(['/login-user']);
      return false;
    }
  }
}
