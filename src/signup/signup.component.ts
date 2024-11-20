import {Component, inject} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../authService/signup/auth.service";
import {Router} from "@angular/router";
@Component({
 selector:"app-signup",
 standalone:true,
 imports:[
  FormsModule
 ],
 templateUrl:"./signup.component.html"
})
export class SignUpComponent{
  username:string = "tronganhnguyen"
  password:string = "tronganhsinh2204"
  token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6e…DY3fQ.CkzZ4hEWbPcxK_20X6HgCupOQ2UO7oINgp-DR9IgM9c"
  auth = inject(AuthService)
  router = inject(Router)
  handleSignUp(username:any, password:any){
   this.auth.onSignUp(username, password).subscribe(() => {
    localStorage.setItem("token", this.token)
    this.router.navigate(["sign-in"])
   })
  }
}