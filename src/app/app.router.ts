/**
 * Created by optomatum on 30/11/16.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./share/auth-guard";
import {LoginComponent} from "./login/login.component";


export const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);




