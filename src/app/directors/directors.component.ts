import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  constructor(private myService: MovieDataService, private router:Router) { }

  public directors = [];

  ngOnInit(): void {
    this.myService.getDirector().subscribe(data => { this.directors = data, console.log(this.directors) });
  }

  onSelect(director){
    this.router.navigate(['/updateDirector',director.directorName]);
  }

  onDetail(director){
    this.router.navigate(['/directorDetails',director.directorName]);
  }

}
