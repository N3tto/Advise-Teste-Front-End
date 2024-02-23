import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor() {}
  @Input()
  pokemon: string = '';

  @Input()
  idPokemon: number = 0;

  getPokemonImg(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.idPokemon}.png`
  }
}
