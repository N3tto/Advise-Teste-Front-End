import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginatorService } from '../services/paginator.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  paginationEvent: any;
  searchControlValue:string = '';
  searchText = '';

  private subscriptions = new Subscription();
  searchControl = new FormControl();
  pokemons: any = [{
    name: '',
  }]

  constructor(public pokemonService: PokemonService, public paginatorService: PaginatorService) { 
    this.subscriptions = this.paginatorService.resetPaginator$.subscribe(() => {
      this.getPagination();
      this.paginator.pageIndex = 0;
    });
  }

  ngOnInit(): void {
    this.getPagination()
    this.fetchPokemon()
  }

  public fetchPokemon(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      this.pokemons = response.results;
    })
  }

  getPagination(event?: PageEvent) {
    this.paginationEvent = event;
  }
  

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}