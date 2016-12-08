/**
 * Created by optomatum on 30/11/16.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./share/auth-guard";
import {LoginComponent} from "./login/login.component";
import {UsersListComponent} from "./users/users-list.component";
import {UsersComponent} from "./users/users.component";


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'users',
        component: UsersComponent,
        children: [

          {
            path: 'usersList',
            component: UsersListComponent,

          },
          {
            path: '',
            redirectTo: 'usersList',
            pathMatch: 'full'
          },
        ]


      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

/*export const routes: Routes = [
 {path: '', component: HomeComponent, canActivate: [AuthGuard]},
 {path: 'userList', component:UsersListComponent},
 {path: 'login', component: LoginComponent}
 ];*/


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);




