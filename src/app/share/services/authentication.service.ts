import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {TokenService} from "./token.service";

@Injectable()
export class AuthenticationService {

  token: any;

  constructor(private http: Http,
              private  tokenService: TokenService) {
  }


  login(username: string, password: string) {



    //let headers = new Headers({ 'Content-Type': 'application/json' });
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers, method: "POST"});

    let data = JSON.stringify(
      {
        username: username,
        password: password
      });
    return this.http.post('http://localhost:9000/api/auth', data, options)
      .map((response: Response) => {
        this.token = response.json();
        this.tokenService.setToken(this.token);
      });
  }
}
