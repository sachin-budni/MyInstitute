import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from './../form/form.service';

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
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,private formService:FormService) {
      this.overviewForm = this.fb.group({
        "review":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getReviews.insert(this.selectIndex,this.formService.getReviewForm);
  }

  get getReviews(){
    return this.overviewForm.get("review") as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
