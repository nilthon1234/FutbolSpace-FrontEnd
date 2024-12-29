import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import {ClientService} from "../../../../factures/service/client.service";
import {ToastrService} from "ngx-toastr";

interface NavItem {
  RouterLink?: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-left-sidebar-client',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './left-sidebar-client.component.html',
  styleUrl: './left-sidebar-client.component.css'
})
export class LeftSidebarClientComponent {


  constructor(
    private clientService: ClientService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsSidebarCollapsed = output<boolean>();

  //cerrar session
  logout(): void {
    this.clientService.logoutClient();
    this.router.navigate(['login-client']);
    this.toastr.success('Se cerro Sesion')
  }

  items : NavItem[]= [
    {
      RouterLink: 'home-client',
      icon: 'fa fa-home',
      label: 'Home Client'
    },
    {
      RouterLink: 'reserva-client',
      icon: 'fal fa-box-open',
      label: 'My Reserva'
    },
    {
      icon: 'fa fa-sign-out',  // Puedes agregar un ícono apropiado
      label: 'Cerrar Sesion',
    }
  ]

  toggleCollapse() {

    this.changeIsSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
  closeSidenav() {

    this.changeIsSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}
