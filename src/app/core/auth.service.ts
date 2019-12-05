import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private auth:AngularFireAuth,private router:Router) { }

  login(auth:Login){
    return this.auth.auth.signInWithEmailAndPassword(auth.email,auth.password);
  }

  switchToMain(){
    this.router.navigate([""]);
  }

}
