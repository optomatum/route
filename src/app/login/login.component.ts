import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../share/services/authentication.service";
import {TokenService} from "../share/services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              //private tokenService:TokenService
  ) {
  }


  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(data => {

        //this.tokenService.setToken(data);
        this.router.navigate(['/']);
      }, error => {
        console.log('error');
      });
  }

  ngOnInit() {
  }

}
