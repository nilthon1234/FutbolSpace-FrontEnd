import { Route, Router, Routes } from "@angular/router";
import { ClientCofigAppsComponent } from "../../../../core/config/client-cofig-apps/client-cofig-apps.component";
import path from "path";
import { HomeClientComponent } from "../components/home-client/home-client.component";
import { ReservaClientComponent } from "../components/reserva-client/reserva-client.component";
import { DetallsCampoFutbolComponent } from "../components/detalls-campo-futbol/detalls-campo-futbol.component";
import { ClientRegisterComponent } from "../components/client-register/client-register.component";
import { ClientLoginComponent } from "../components/client-login/client-login.component";
import { clientGuard } from "../../../../core/guards/client.guard";
import { AddReservaComponent } from "../components/add-reserva/add-reserva.component";

export const routeClient : Routes = [
    {path: '',
        component: ClientCofigAppsComponent, //contenedor principal del client
        children: [
            {path: '', redirectTo: 'home-client', pathMatch: 'full'},
            {path: 'home-client', component: HomeClientComponent},
            {path: 'reserva-client', component: ReservaClientComponent, },
            {path: 'campo-details/:id', component: DetallsCampoFutbolComponent, },
            {path: 'add-reserva', component: AddReservaComponent},
        ]
     },
     {path: 'register-client', component: ClientRegisterComponent},
     {path: 'login-client', component: ClientLoginComponent}
     
]