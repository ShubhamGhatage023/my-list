import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.css']
})
export class DirectorDetailsComponent implements OnInit {

  constructor(private myService : MovieDataService,private route:ActivatedRoute) { }

  public director;
  public films=[];
  public directorName;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.directorName=params['directorName'];
      console.log(this.directorName);
    })
    this.myService.getDirectorByName(this.directorName).subscribe(data =>{
      this.director=data
    });
    this.myService.getFilmByDirector(this.directorName).subscribe(data => {this.films=data,console.log(this.films)});
  }

}
