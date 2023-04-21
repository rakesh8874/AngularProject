import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  feedback:Feedback = {};
 
  location = ["Hunts Ville","Spring Dale","Orlando","Augusta","New York"];

  constructor(private _snackBar:MatSnackBar) { }
    
  ngOnInit(): void {
  }

  onSubmit(data:any){
    console.log(data.value);
    this._snackBar.open('Feedback submitted successfully', 'success', {
            duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
      })
      data.reset();
  }

}
