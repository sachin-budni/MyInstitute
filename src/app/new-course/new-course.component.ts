import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { FormService } from '../form/form.service';

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
  titleAlert:string = "Field is Required";
  toppingList: string[] = ['Advance Excel', 'VBA', 'SQL', 'Tally'];
  constructor(public dialogRef: MatDialogRef<NewCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,private formService:FormService) {
      
      // this.overviewForm
      this.overviewForm = this.fb.group({
        "course":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getCourse.insert(this.selectIndex,this.formService.getCourseForm);
  }

  get getCourse(){
    return this.overviewForm.get("course") as FormArray;
  }
  geterror(item){
    console.log(item)
    return this.titleAlert;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
