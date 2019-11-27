import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {

  overviewForm:FormGroup;
  selectIndex:number = 0;
  titleAlert = "Field is Requied"
  toppingList: string[] = ['Advanced Excel', 'VBA', 'SQL', 'Tally'];
  constructor(public dialogRef: MatDialogRef<NewReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) {
      this.overviewForm = this.fb.group({
        "review":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getReviews.insert(this.selectIndex,this.fb.group({
      review:["",[Validators.required,Validators.minLength(3)]],
      skills:["",[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(10)]],
      candidateName:["",[Validators.required,Validators.minLength(3)]]
    }))
  }

  get getReviews(){
    return this.overviewForm.get("review") as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
