import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar-client',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './left-sidebar-client.component.html',
  styleUrl: './left-sidebar-client.component.css'
})
export class LeftSidebarClientComponent {
  
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsSidebarCollapsed = output<boolean>();
  
  items = [
    {
      RouterLink: 'home-client',
      icon: 'fa fa-home',
      label: 'Home Client'
    },
    {
      RouterLink: 'reserva-client',
      icon: 'fal fa-box-open',
      label: 'My Reserva'
    }
  ]
  
  toggleCollapse() {

    this.changeIsSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
  closeSidenav() {

    this.changeIsSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}
