import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const APP_ROUTES: Routes =[
    {path:'repo-details/:login/:repoName', component:RepoDetailsComponent},
    {path:'repos/:name', component:RepositoriesComponent},
    {path:'',component:UserComponent}
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);