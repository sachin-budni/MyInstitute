import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { NewCourseComponent } from '../new-course/new-course.component';
import { NewjobComponent } from '../newjob/newjob.component';
import { NewReviewComponent } from '../new-review/new-review.component';
import { FormService } from '../form/form.service';

@Component({
  selector: 'institute-overview',
  templateUrl: './institute-overview.component.html',
  styleUrls: ['./institute-overview.component.scss']
})
export class InstituteOverviewComponent implements OnInit {

  overviewForm:FormGroup;

  selectedValue: number = 0;
  constructor(private fb:FormBuilder,public dialog: MatDialog,private formService:FormService) { }

  ngOnInit() {
    this.overviewForm = this.fb.group({
      header:this.fb.array([]),
      course:this.fb.array([]),
      job:this.fb.array([]),
      review:this.fb.array([]),
    })

    this.getHeader.insert(this.selectedValue,this.fb.group({
      headerName:["",[Validators.required]],
      description:["",[Validators.required]]
    }))
    this.formService.getCurrentUserInstitute.subscribe(data=>{

      if(data["header"]){
        for (let i = 0; i < data["header"].length; i++) {
          const element = data["header"][i];
          let headerForm:FormGroup = this.formService.getHeaderForm;
          headerForm.setValue(element);
          this.getHeader.insert(i,headerForm);
        }
      }

      if(data["course"]){
        for (let i = 0; i < data["course"].length; i++) {
          const element = data["course"][i];
          let courseForm:FormGroup = this.formService.getCourseForm;
          courseForm.setValue(element);
          this.getCourses.insert(i,courseForm);
        }
      }

      if(data["job"]){
        for (let i = 0; i < data["job"].length; i++) {
          const element = data["job"][i];
          let courseForm:FormGroup = this.formService.getCourseForm;
          courseForm.setValue(element);
          this.getCourses.insert(i,courseForm);
        }
      }

      if(data["review"]){
        for (let i = 0; i < data["review"].length; i++) {
          const element = data["review"][i];
          let courseForm:FormGroup = this.formService.getCourseForm;
          courseForm.setValue(element);
          this.getCourses.insert(i,courseForm);
        }
      }
    });
  }

  get getHeader(){
    return this.overviewForm.get("header") as FormArray;
  }

  get getCourses(){
    return this.overviewForm.get('course') as FormArray;
  }

  get getJobs(){
    return this.overviewForm.get('job') as FormArray;
  }

  get getReview(){
    return this.overviewForm.get('review') as FormArray;
  }

  addform(){
    if(this.overviewForm.valid){
      this.selectedValue = this.getHeader.length;
      this.getHeader.insert(this.selectedValue,this.fb.group({
        headerName:["",[Validators.required]],
        description:["",[Validators.required]]
      }))
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.getHeader.controls, event.previousIndex, event.currentIndex);
  }

  openCourseDialog(): void {
    const dialogRef = this.dialog.open(NewCourseComponent, {
      data: {formGroup1:null}
    });

    dialogRef.afterClosed().subscribe((result:FormGroup) => {
      if (result) {
        let courses:FormArray = result.get("course") as FormArray;
        let index = this.getCourses.length;
        courses.controls.forEach(data=>{
          this.getCourses.insert(index,data);
        })
      }
    });
  }

  openJobDialog(){
    const dialogRef = this.dialog.open(NewjobComponent, {
      data: {formGroup1:null}
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("close")
      console.log(result)

      if (result) {
        let jobs:FormArray = result.get("job") as FormArray;
        let index = this.getJobs.length;
        jobs.controls.forEach(data=>{
          this.getJobs.insert(index,data);
        })
      }

    })
  }

  onSubmit(value){
    console.log(value)
  }

  openReviewDialog(){
    const dialogRef = this.dialog.open(NewReviewComponent, {
      data: {formGroup1:null}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if (result) {
        let reviews:FormArray = result.get("review") as FormArray;
        let index = this.getReview.length;
        reviews.controls.forEach(data=>{
          this.getReview.insert(index,data);
        })
      }
    })
  }

  submitted(){
    if (this.overviewForm.valid) {
      this.formService.postData(this.overviewForm.value).then(d=>{
        console.log(d)
      }).catch(err=>{
        console.error(err);
      })
    }else{
      alert("not valid")
    }
  }

}
