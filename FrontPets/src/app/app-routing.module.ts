import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"sign-up", component: NewUserComponent},
  /*{path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"**",component:VoidComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
