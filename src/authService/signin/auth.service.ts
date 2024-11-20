import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable({
 providedIn:"root"
})
export class AuthService{
  baseURL = "https://angulartest-1.onrender.com/api"
  endPoint = "user/login"
  constructor(private http:HttpClient){}
  onSignIn(username:string, password:string){
   return this.http.post(`${this.baseURL}/${this.endPoint}`, {username:username,password:password})
  }
}