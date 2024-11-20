import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable({
 providedIn:"root"
})
export class AuthService{
  baseURL = "https://angulartest-1.onrender.com/api"
  endPoint = "user/sign-up"
  constructor(private http:HttpClient){}
  onSignUp(username:string, password:string){
   return this.http.post(`${this.baseURL}/${this.endPoint}`, {username:username,password:password})
  }
}