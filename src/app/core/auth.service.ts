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
  register(data){
    return this.auth.auth.createUserWithEmailAndPassword(data.email,data.password);
  }
  switchToMain(){
    this.router.navigate([""]);
  }
  updateUser(instituteName){
    return this.auth.auth.currentUser.updateProfile({
      displayName:instituteName,
      photoURL:"assets/Computer.png"
    })
  }
  get getCurrentUser(){
    return this.auth.auth.currentUser;
  }

  get getUser(){
    return this.auth.user;
  }

  logout(){
    return this.auth.auth.signOut();
  }

}
