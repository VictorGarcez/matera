import { ActivatedRoute } from '@angular/router';
import { RepoDetailsService } from './repo-details.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  loginName:string;
  repoName:string;
  repoDetails = [];
  constructor(private _repoDetailsService:RepoDetailsService, private route:ActivatedRoute) { 
    this.loginName = this.route.snapshot.params["login"];
    this.repoName = this.route.snapshot.params["repoName"];
    console.log(this.repoName);
  }

  ngOnInit() {
    this._repoDetailsService.getDetailsRepo(this.loginName + '/' + this.repoName)
      .subscribe(
        res=>{this.repoDetails = res},
        err=>{console.log(err)}
      );
  }

}
