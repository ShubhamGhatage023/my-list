import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private myService : MovieDataService, private router:Router) { }

  public films=[];

  ngOnInit(): void {
    this.myService.getFilm().subscribe(data => {this.films=data,console.log(this.films)}); 
  }

  onDelete(filmName){
    this.myService.deleteFilmData(filmName).subscribe(data => {console.log(data)});
  }

  onDetail(film){
    this.router.navigate(['/filmDetails',film.filmName]);
  }
}
