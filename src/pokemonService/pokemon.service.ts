import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable({
  providedIn:"root"
})
export class PokemonService{
  baseURL = "https://angulartest-1.onrender.com/api"
  endPoint = "pokemon/list"
  detailURL = "pokemon/detail"
  constructor(private http:HttpClient){}
  getPokemonList(){
   return this.http.get(`${this.baseURL}/${this.endPoint}`)
  }
  getPokemonDetail(_id:string){
   return this.http.get(`${this.baseURL}/${this.detailURL}/${_id}`)
  }
}