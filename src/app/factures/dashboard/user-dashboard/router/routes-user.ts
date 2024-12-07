import { Routes } from "@angular/router"
import { LoginUserComponent } from "../components/login-user/login-user.component"
import { RegisterUserComponent } from "../components/register-user/register-user.component"
import { HomeUserComponent } from "../components/home-user/home-user.component"
import { UserGuard } from "../../../../core/guards/user.guard"

export const routerUsu: Routes = [
    {path: 'login-user', component: LoginUserComponent},
    {path: 'register-user', component: RegisterUserComponent},
    {path: 'home-user', component: HomeUserComponent, canActivate: [UserGuard]}


    

]