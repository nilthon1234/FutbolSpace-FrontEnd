import { Component, HostListener, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { LeftSidebarClientComponent } from "../../../shared/components/navbars/left-sidebar-client/left-sidebar-client.component";
import { MainClientComponent } from "../../../factures/dashboard/client-dashboard/components/main-client/main-client.component";
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-client-cofig-apps',
  standalone: true,
  imports: [LeftSidebarClientComponent, MainClientComponent],
  templateUrl: './client-cofig-apps.component.html',
  styleUrl: './client-cofig-apps.component.css'
})
export class ClientCofigAppsComponent implements OnInit{
  
  screenWidth = signal<number>(0); // Inicializamos con un valor predeterminado.
  isLeftSidebarCollapsed = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.isLeftSidebarCollapsed.set(true);
      }
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}
