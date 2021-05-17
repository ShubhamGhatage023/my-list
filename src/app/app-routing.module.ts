import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertFilmComponent } from './insert-film/insert-film.component';
import { InsertDirectorComponent } from './insert-director/insert-director.component';
import { DirectorsComponent } from './directors/directors.component';
import { FilmsComponent } from './films/films.component';
import { UpdateDirectorComponent } from './update-director/update-director.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  {path : 'insertFilm', component : InsertFilmComponent},
  {path : 'insertDirector', component : InsertDirectorComponent},
  {path : 'films', component : FilmsComponent},
  {path : 'directors', component : DirectorsComponent},
  {path : 'updateDirector/:directorName', component : UpdateDirectorComponent},
  {path : 'directorDetails/:directorName', component : DirectorDetailsComponent},
  {path : 'filmDetails/:filmName', component : FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
