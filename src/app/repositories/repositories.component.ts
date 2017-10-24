import { RepositoriesService } from './repositories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos = [];
  ownerLogin:string;
  starOrder:boolean = true;
  constructor(private _repositoriesService:RepositoriesService, private route:ActivatedRoute) {   
    this.ownerLogin = this.route.snapshot.params['name'];
  }

  ngOnInit() {
    this._repositoriesService.getRepositories(this.ownerLogin)
      .subscribe(
        res=>{this.repos = res},
        //res=>{console.log(res)},
        err=>{console.log(err)}
      );
  }
  changeStarOrder(){
    this.starOrder = !this.starOrder;
  }

}
