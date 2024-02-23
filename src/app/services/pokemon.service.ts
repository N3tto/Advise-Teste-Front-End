import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  pokemons = []

  constructor(private http: HttpClient) { 
    this.getPokemons();
  }
  
  public getPokemons(): Observable<any> {
    return this.http
    .get<any>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .pipe(
      take(1),
      tap((response: any) => (response) )
    );
  }
}
