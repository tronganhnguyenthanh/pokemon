import {NgClass, NgFor, NgIf} from "@angular/common";
import {Component, inject, OnInit} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemonService/pokemon.service";
import {SearchPokemonService} from "../pokemonService/searchPokemonByName.service";
@Component({
 selector:"app-header",
 standalone:true,
 imports:[
  FormsModule,
  NgClass,
  NgFor,
  NgIf
 ],
 templateUrl:"./header.component.html",
 styleUrl:"./header.component.css"
})
export class Header implements OnInit{
  isMenuOpen = false;
  isModalOpen = false;
  selectedPokemon: any = null
  router = inject(Router)
  pokemonList:any = []
  pokemon = inject(PokemonService)
  name:string = ""
  searchPokemon = inject(SearchPokemonService)
  pokemonDetail = inject(PokemonService)
  ngOnInit():void{
   this.getPokemons()
  }
  openMenu(): void {
   this.isMenuOpen = true;
  }
  closeMenu(): void {
   this.isMenuOpen = false;
  }
  redirectToSignUpPage(){
   this.router.navigate(["/sign-up"])
  }
  redirectToSignInPage(){
   this.router.navigate(["/sign-in"])
  }
  youtubeCarouselTrailer:any = [
    {
      name:"https://www.youtube.com/embed/NFTemk99fLU?si=r4-svLSU3MfK1OnO"   
    },
    {
      name:"https://www.youtube.com/embed/1V4DQa5HaR0?si=7qUW9oe3MubC-W-Z"
    },
    {
      name:"https://www.youtube.com/embed/z_TPXbH7ee4?si=1yb8EQLQSOQeQog_"
    },
    {
      name:"https://www.youtube.com/embed/YogtSeb_O9s?si=gbCXv50424Rii1tT"
    }
  ]
  constructor(private sanitizer:DomSanitizer){}
  sanitizerURL(url:string){
   return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  currentSlide = 0;
  nextSlide() {
   this.currentSlide = (this.currentSlide + 1) % this.youtubeCarouselTrailer.length;
  }
  prevSlide() {
   this.currentSlide = (this.currentSlide - 1 + this.youtubeCarouselTrailer.length) % this.youtubeCarouselTrailer.length;
  }
  getPokemons(){
   this.pokemon.getPokemonList().subscribe(subscribe => {
     this.pokemonList = subscribe
   })
  }
  filterPokemonByName(name:string){
   this.searchPokemon.searchPokemonByName(name).subscribe(filter => {
     this.pokemonList = filter
   })
  }
  openModal(_id:string):void{
    // Fetch details for the selected Pokémon
    this.pokemon.getPokemonDetail(_id).subscribe(
      (pokemonDetails) => {
        // Set selectedPokemon when the details are fetched
        this.selectedPokemon = pokemonDetails;
        this.isModalOpen = true;
      },
      (error) =>{
        console.error('Error fetching Pokémon details:', error);
      }
    );
  }
  closeModal(){
    this.isModalOpen = false;
    this.selectedPokemon = null;
  }
  trackItemById(item: any):string{
   return item?._id; // Use unique identifier to track items
  }
}