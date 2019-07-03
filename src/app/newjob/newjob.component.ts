import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.scss']
})
export class NewjobComponent implements OnInit {

  overviewForm:FormGroup;
  selectIndex:number = 0;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(public dialogRef: MatDialogRef<NewjobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) {
      this.overviewForm = this.fb.group({
        "job":this.fb.array([])
      })
    }
    
  ngOnInit() {
    this.getJobs.insert(this.selectIndex,this.fb.group({
      headerName:[""],
      experience:[""],
      salary:[""],
      skills:[""],
      description:[''],
      location:[""]
    }))
  }

  get getJobs(){
    return this.overviewForm.get("job") as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
