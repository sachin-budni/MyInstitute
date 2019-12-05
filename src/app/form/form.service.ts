import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class FormService {

  list:AngularFireList<any>;
  
  constructor(private fireDb:AngularFireDatabase,private router:Router) {
    this.list = this.fireDb.list("institutes");
  }


  getData(){
    return this.list.valueChanges();
  }

  postData(data){
    return this.list.push(data);
  }

}
