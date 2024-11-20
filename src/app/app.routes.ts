import {Routes} from '@angular/router';
import {SignInComponent} from '../signin/signin.component';
import {SignUpComponent} from '../signup/signup.component';
import {Header} from '../header/header.component';
export const routes: Routes = [
  {
    path:"sign-up",
    component:SignUpComponent
  },
  {
    path:"sign-in",
    component:SignInComponent
  },
  {
    path:"",
    component:Header
  }
];
