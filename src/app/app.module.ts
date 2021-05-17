import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDataService } from './movie-data.service';
import { InsertFilmComponent } from './insert-film/insert-film.component';
import { InsertDirectorComponent } from './insert-director/insert-director.component';
import { DirectorsComponent } from './directors/directors.component';
import { FilmsComponent } from './films/films.component';
import { UpdateDirectorComponent } from './update-director/update-director.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
@NgModule({
  declarations: [
    AppComponent,
    InsertFilmComponent,
    InsertDirectorComponent,
    DirectorsComponent,
    FilmsComponent,
    UpdateDirectorComponent,
    DirectorDetailsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
