import { Routes } from '@angular/router';
import { MainNavbarComponent } from './shared/components/navbars/main-navbar/main-navbar.component';
import { AdminNavbarComponent } from './shared/components/navbars/admin-navbar/admin-navbar.component';
import { UsuarioNavbarComponent } from './shared/components/navbars/usuario-navbar/usuario-navbar.component';
import { AdminLoginComponent } from './auth/component/admin-login/admin-login.component';
import { AdminRegisterComponent } from './auth/component/admin-register/admin-register.component';
import { adminGuard } from './auth/guards/admin.guard';
import { AllListCampoFutbolComponent } from './factures/dashboard/admin-dashboard/components/all-list-campo-futbol/all-list-campo-futbol.component';
import { AllListUserComponent } from './factures/dashboard/admin-dashboard/components/all-list-user/all-list-user.component';

export const routes: Routes = [
    {path: 'main', component: MainNavbarComponent },
    //navBar
    {path: 'admin', component: AdminNavbarComponent },
    {path: 'usu', component: UsuarioNavbarComponent},
    //auth JWT
    {path: 'login-admin', component: AdminLoginComponent},
    {path: 'register-admin', component: AdminRegisterComponent},
    {path: '', redirectTo: "/login-admin",pathMatch:  'full'},
    //canActivate guards -> , canActivate: [adminGuard]
    {path: 'list-campofutbol', component: AllListCampoFutbolComponent, canActivate: [adminGuard]},
    {path: 'list-user', component:AllListUserComponent}

];
