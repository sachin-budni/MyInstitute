import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-profile',
  templateUrl: './institute-profile.component.html',
  styleUrls: ['./institute-profile.component.scss']
})
export class InstituteProfileComponent implements OnInit {

  images:string="assets/Computer.png";

  constructor() { }

  ngOnInit() {
  }

  onChange(event){
    if(event.target.files.length != 0){
      let f1 = event.target.files[0];
      let file = new FileReader();
      file.onload =(e)=>{
        this.images = e.target["result"];
      }
      file.readAsDataURL(f1);
    }
  }

}
