import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

  constructor(
    private router: Router,
  ){}

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login-admin');
  }

}
