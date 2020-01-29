import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder,Validators } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class FormService {

  list:AngularFireList<any>;
  
  constructor(private fireDb:AngularFireDatabase,private router:Router,
    private auth:AngularFireAuth,private fb:FormBuilder) {
    this.list = this.fireDb.list("institutes");
  }


  getData(){
    return this.list.valueChanges();
  }

  getInstitute(id:string){
    return this.fireDb.object(`institutes/${id}`).valueChanges();
  }

  postData(data){
    return this.fireDb.object(`institutes/${this.auth.auth.currentUser.uid}`).set(data);
  }

  addNewUser(data){
    return this.fireDb.object(`users/${data.id}`).set(data)
  }

  getUser(name){
    return this.fireDb.list(`users`,ref=>ref.orderByChild("instituteName").equalTo(name)).valueChanges();
  }

  get getCurrentUserInstitute(){
    return this.fireDb.object(`institutes/${this.auth.auth.currentUser.uid}`).valueChanges();
  }

  getInstitutes(){
    return this.fireDb.list("users");
  }

  pushEnquiry(value){
    this.fireDb.list("enquiry").push(value);
  }

  get getHeaderForm(){
    return this.fb.group({
      headerName:["",[Validators.required]],
      description:["",[Validators.required]]
    })
  }

  get getCourseForm(){
    return this.fb.group({
      headerName:["",[Validators.required,Validators.minLength(3)]],
      hours:["",[Validators.required,Validators.minLength(3)]],
      skills:["",[Validators.required]],
      description:['',[Validators.required,Validators.minLength(10)]],
      location:["",[Validators.required,Validators.minLength(3)]]
    })
  }

  get getJobForm(){
    return this.fb.group({
      position:["",[Validators.required,Validators.minLength(3)]],
      experience:["",[Validators.required,Validators.minLength(3)]],
      salary:["",[Validators.required,Validators.minLength(3)]],
      skills:["",[Validators.required]],
      description:['',[Validators.required,Validators.minLength(10)]],
      location:["",[Validators.required,Validators.minLength(3)]]
    })
  }

  get getReviewForm(){
    return this.fb.group({
      review:["",[Validators.required,Validators.minLength(3)]],
      skills:["",[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(10)]],
      candidateName:["",[Validators.required,Validators.minLength(3)]]
    })
  }

}
