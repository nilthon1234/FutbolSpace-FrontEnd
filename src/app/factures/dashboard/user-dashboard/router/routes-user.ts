import { Routes } from "@angular/router"
import { LoginUserComponent } from "../components/login-user/login-user.component"
import { RegisterUserComponent } from "../components/register-user/register-user.component"
import { HomeUserComponent } from "../components/home-user/home-user.component"
import { UserGuard } from "../../../../core/guards/user.guard"

export const routerUsu: Routes = [
    {path: 'login-user',title: 'Usuario', component: LoginUserComponent},
    {path: 'register-user',title: 'Usuario', component: RegisterUserComponent},
    {path: 'home-user',title: 'Usuario', component: HomeUserComponent, canActivate: [UserGuard]}


    

]