import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from 'firebase';
import { Observable } from 'rxjs';


class ProfileDropDown { 
  name:string;
  value:string;
  route?:string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:Observable<User>;

  profileDropdown: ProfileDropDown[] = [
    {value: 'profile', name: 'Profile' ,route:"profile"},
    {value: 'setting', name: 'Setting',route:"profile"},
    {value: 'view', name: 'View',route:"profile"}
  ];

  constructor(private authService:AuthService) { 
    this.user = this.authService.getUser;
  }
  
  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
