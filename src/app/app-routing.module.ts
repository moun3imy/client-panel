import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"", redirectTo : '/clients',pathMatch:'full'},
  {path:"clients", component : ListClientComponent},
  {path:"clients/create", component : AddClientComponent},
  {path:"clients/:id/edit", component : EditClientComponent},
  {path:"register", component : RegisterComponent},
  {path:"login", component : LoginComponent},
  {path:"**", component : PageNotFoundComponent},
  //this line should be the last
  //never prefix the routes with '/'
  //when navigating in the html via routerLink, include the '/' in the link

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
