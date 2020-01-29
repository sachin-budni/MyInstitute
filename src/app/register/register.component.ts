import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  returnUrl: string;
  loginFormGroup:FormGroup;
  forgetEmail:string;
  forgetPassword:FormGroup;
  flag : boolean = true;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private fBuilder : FormBuilder,private activeRoute:ActivatedRoute,
    private authService:AuthService,private formService:FormService,
    private router:Router) { }

  ngOnInit() {
    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
    let passwordRegex: RegExp = /((?=.*\d)(?=.*[a-zA-Z]).{8,20})/ 
    this.loginFormGroup = this.fBuilder.group({
      "instituteName":[null,[Validators.required,Validators.minLength(3)]],
      "email":[null,[Validators.required,Validators.pattern(this.emailregex)]],
      "mobileNo":[null,[Validators.required,Validators.minLength(10)]],
      "password":[null,[Validators.required,Validators.pattern(passwordRegex)]]
    });

    this.forgetPassword = this.fBuilder.group({
      forgotEmail:[null,[Validators.required,Validators.pattern(this.emailregex)]]
    })
  }

  getErrorPassword() {
    return this.loginFormGroup.get('password').hasError('required') ? 'Field is required' :
      this.loginFormGroup.get('password').hasError('pattern') ? 'Not a valid password' :'';
  }

  getErrorEmail(mail) {
    if(mail == 'email'){
      return this.loginFormGroup.get(mail).hasError('required') ? 'Field is required' :
        this.loginFormGroup.get(mail).hasError('pattern') ? 'Not a valid emailaddress' :'';
          // this.loginFormGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : ''
    }else{
      return this.forgetPassword.get(mail).hasError('required') ? 'Field is required' :
        this.forgetPassword.get(mail).hasError('pattern') ? 'Not a valid emailaddress' :'';
          // this.loginFormGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : ''    
    }
  }

  onSubmit(data){
    this.authService.register(data).then(d=>{
      data.id = d.user.uid;
      this.authService.updateUser(data.instituteName);
      delete data["password"];
      this.formService.addNewUser(data);
      this.router.navigate(['candidate'])
    }).catch(err=>{ 
      alert(err.message);
    });
  }
  GoogleLogin(){
    // this.authService.googleLogin();
  }

  resetPassword(){
    this.flag = false;
  }

}
