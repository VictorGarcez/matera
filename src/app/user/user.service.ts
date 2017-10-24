import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private _url: string = "https://api.github.com/users/";
  constructor(private _http: Http) { }

  getUser(name){
    console.log(this._url + name);
    return this._http.get(this._url + name).map((response:Response)=>response.json());
  }
}
