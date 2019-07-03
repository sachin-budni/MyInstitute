import { Component, OnInit } from '@angular/core';


class ProfileDropDown { 
  name:string;
  value:string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profileDropdown: ProfileDropDown[] = [
    {value: 'profile', name: 'Profile'},
    {value: 'setting', name: 'Setting'},
    {value: 'view', name: 'View'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
