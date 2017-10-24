import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = [];
  error:boolean = false;
  

  constructor(private _userService: UserService) {}

  ngOnInit() {

  }
  searchUser(name){
    this._userService.getUser(name)
      .subscribe(
        res => {this.user=res, this.error = false},
        err => {this.error = true}
      );
  }

}
