import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.scss']
})
export class NewjobComponent implements OnInit {

  overviewForm:FormGroup;
  titleAlert:string = "Field is Required";
  selectIndex:number = 0;
  toppingList: string[] = ['Advance Excel', 'VBA', 'SQL', 'Tally'];
  constructor(public dialogRef: MatDialogRef<NewjobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) {
      this.overviewForm = this.fb.group({
        "job":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getJobs.insert(this.selectIndex,this.fb.group({
      position:["",[Validators.required,Validators.minLength(3)]],
      experience:["",[Validators.required,Validators.minLength(3)]],
      salary:["",[Validators.required,Validators.minLength(3)]],
      skills:["",[Validators.required]],
      description:['',[Validators.required,Validators.minLength(10)]],
      location:["",[Validators.required,Validators.minLength(3)]]
    }))
  }

  get getJobs(){
    return this.overviewForm.get("job") as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
