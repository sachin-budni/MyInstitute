import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {

  overviewForm:FormGroup;
  selectIndex:number = 0;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(public dialogRef: MatDialogRef<NewReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) {
      this.overviewForm = this.fb.group({
        "review":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getReviews.insert(this.selectIndex,this.fb.group({
      headerName:[""],
      skills:[""],
      description:[''],
      candidateName:[""]
    }))
  }

  get getReviews(){
    return this.overviewForm.get("review") as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
