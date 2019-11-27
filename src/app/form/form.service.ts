import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class FormService {

  constructor(private http:HttpClient) { }


  getData(){
    this.http.get("http://localhost:5000/products").toPromise()
    .then(data=>{
      console.log(data)
    }).catch(err=>console.log(err));
  }

  postData(data){
    this.http.post("http://localhost:5000/products",data,httpOptions).toPromise()
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
  }

}
