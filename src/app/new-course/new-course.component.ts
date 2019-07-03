import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

class OverViewForm{
  formGroup1:FormGroup;
}

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  overviewForm:FormGroup;
  selectIndex:number = 0;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(public dialogRef: MatDialogRef<NewCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) {
      
      // this.overviewForm
      this.overviewForm = this.fb.group({
        "course":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getCourse.insert(this.selectIndex,this.fb.group({
      headerName:[""],
      hours:[""],
      skills:[""],
      description:[''],
      location:[""]
    }))
  }

  get getCourse(){
    return this.overviewForm.get("course") as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
