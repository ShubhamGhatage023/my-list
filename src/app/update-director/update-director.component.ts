import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MovieDataService } from '../movie-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-director',
  templateUrl: './update-director.component.html',
  styleUrls: ['./update-director.component.css']
})
export class UpdateDirectorComponent implements OnInit {

  constructor(private fb : FormBuilder, private myService : MovieDataService,private route:ActivatedRoute) { }

  public directorName;
  public director;
  public directorForm = this.fb.group({
    directorAge : ["",Validators.required],
    directorAwards : ["",Validators.required]
  });

  onSubmit(){
    console.log(this.directorForm.value);
    this.myService.updateDirectorrData(this.directorName,this.directorForm.value).subscribe(
      data => console.log("Success!",data),
      error => console.log("Error!",error)
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.directorName=params['directorName'];
      console.log(this.directorName);
    })
    this.myService.getDirectorByName(this.directorName).subscribe(data =>{
      this.director=data
    });
  }
  
}
