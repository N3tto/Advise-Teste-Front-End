import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorPipe } from './pipes/paginator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContainerComponent,
    PaginationComponent,
    PaginatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
