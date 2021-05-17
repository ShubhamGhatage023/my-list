import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(private myService : MovieDataService,private route:ActivatedRoute) { }

  public film;
  public directors=[];
  public filmName;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.filmName=params['filmName'];
      console.log(this.filmName);
    })
    this.myService.getFilmByName(this.filmName).subscribe(data =>{
      this.film=data,console.log(this.film);
    });
    //this.myService.getFilmByDirector(this.directorName).subscribe(data => {this.films=data,console.log(this.films)});
  }

}
