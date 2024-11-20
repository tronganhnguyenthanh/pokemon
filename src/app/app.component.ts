import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SignUpComponent} from '../signup/signup.component';
import {SignInComponent} from '../signin/signin.component';
import {Header} from '../header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   RouterOutlet,
   SignUpComponent,
   SignInComponent,
   Header
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularpokemon';
}
