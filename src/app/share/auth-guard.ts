import {Router, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {TokenService} from "./services/token.service";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private token: TokenService) {
  }

  canActivate() {
    if (this.token.getToken())
      return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
