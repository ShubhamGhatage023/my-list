import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-insert-film',
  templateUrl: './insert-film.component.html',
  styleUrls: ['./insert-film.component.css']
})
export class InsertFilmComponent implements OnInit {

  constructor(private fb : FormBuilder, private myService : MovieDataService) { }

  public directors=[];

  public filmForm = this.fb.group({
    filmName : ["",Validators.required],
    filmCollection : ["",Validators.required],
    filmDirectors : this.fb.array([]),
    filmRating : ["",Validators.required]
  });

  onCheckboxChange(e) {
    const checkArray1: FormArray = this.filmForm.get('filmDirectors') as FormArray;
    if (e.target.checked) {
      checkArray1.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray1.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray1.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(){
    console.log(this.filmForm.value);
    this.myService.sendFilmData(this.filmForm.value).subscribe(
      data => console.log("Success!",data),
      error => console.log("Error!",error)
    );
  }


  ngOnInit(): void {
    this.myService.getDirector().subscribe(data => {this.directors=data,console.log(this.directors)}); 
  }

}
