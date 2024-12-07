import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../../factures/service/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuario-navbar.component.html',
  styleUrl: './usuario-navbar.component.css'
})
export class UsuarioNavbarComponent {

  constructor(
    private userService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
  ){

  }

  logout():void{
    this.userService.logoutUsu();
    this.router.navigate(['login-user'])
    this.toastr.info('Sesion Cerrada Correctamente')
  }

}
