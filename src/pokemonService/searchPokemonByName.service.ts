import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable({
  providedIn:"root"
})
export class SearchPokemonService{
  baseURL = "https://angulartest-1.onrender.com/api"
  endPoint = "pokemon/list"
  constructor(private http:HttpClient){}
  searchPokemonByName(name:string){
   return this.http.get(`${this.baseURL}/${this.endPoint}?name=${name}`)
  }
}