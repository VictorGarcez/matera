import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepositoriesService {
  
  private _url: string = "https://api.github.com/users/";

  constructor(private _http:Http) { }

  getRepositories(name){
    return this._http.get(this._url + name + "/repos").map((response:Response)=>response.json());
  }
}
