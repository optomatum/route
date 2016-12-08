/**
 * Created by optomatum on 7/12/16.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {UsersListComponent} from "./users-list.component";
import {UsersComponent} from "./users.component";
import {AuthGuard} from "../share/auth-guard";


export const userRoutes: Routes = [
  {path: '', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'userList', component: UsersComponent, outlet: 'child'}
];


export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);
