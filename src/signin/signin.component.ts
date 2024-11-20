import {Component, inject} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../authService/signin/auth.service";
@Component({
 selector:"app-signin",
 standalone:true,
 imports:[
  FormsModule
 ],
 templateUrl:"./signin.component.html"
})
export class SignInComponent{
  username:string = "tronganhnguyen"
  password:string = "tronganhsinh2204"
  token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6e…DY3fQ.CkzZ4hEWbPcxK_20X6HgCupOQ2UO7oINgp-DR9IgM9c"
  auth = inject(AuthService)
  router = inject(Router)
  handleSignIn(username:any, password:any){
   this.auth.onSignIn(username, password).subscribe(() => {
    localStorage.setItem("token", this.token)
    this.router.navigate(["home"])
   })
  }
}