import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: '', component: SigninComponent }, //localhost:4200/
  {path: 'signout' , component:SignoutComponent},
  { path: 'signup', component: SignupComponent }, //localhost:4200/signup
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
