import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepoDetailsService } from './repo-details/repo-details.service';
import { RepositoriesService } from './repositories/repositories.service';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoriesComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    Ng2OrderModule
  ],
  providers: [UserService, RepositoriesService, RepoDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
