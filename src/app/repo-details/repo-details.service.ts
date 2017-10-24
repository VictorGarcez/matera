import { Http , Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RepoDetailsService {

  private _url: string = "https://api.github.com/repos/";
  constructor(private _http:Http) { }

  getDetailsRepo(repoName){
    return this._http.get(this._url + repoName).map((response:Response)=>response.json());
  }

}
