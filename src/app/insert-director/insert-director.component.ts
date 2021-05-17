import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-insert-director',
  templateUrl: './insert-director.component.html',
  styleUrls: ['./insert-director.component.css']
})
export class InsertDirectorComponent implements OnInit {

  constructor(private fb : FormBuilder, private myService : MovieDataService){}

    public directorForm = this.fb.group({
      directorName : ["",Validators.required],
      directorAge : ["",Validators.required],
      directorGender : ["",Validators.required],
      directorAwards : ["",Validators.required]
    });

    onSubmit(){
      console.log(this.directorForm.value);
      this.myService.sendDirectorData(this.directorForm.value).subscribe(
        data => console.log("Success!",data),
        error => console.log("Error!",error)
      );
    }

    ngOnInit(): void {
    }
}
