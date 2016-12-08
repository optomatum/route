import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';

import {routing} from './app.router';
import {LoginComponent} from './login/login.component';
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {PasswordModule} from "primeng/components/password/password";
import {ButtonModule} from "primeng/components/button/button";
import {AuthGuard} from "./share/auth-guard";
import {AuthenticationService} from "./share/services/authentication.service";
import {TokenService} from './share/services/token.service';
import {MenuComponent} from './home/menu/menu.component';
import {UsersComponent} from './users/users.component';
import {UsersListComponent} from './users/users-list.component';
import {userRouting} from "./users/users.router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    UsersComponent,
    UsersListComponent
  ],
  imports: [


    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [
    TokenService,
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
