import { Component, OnInit } from '@angular/core';
import { FormService } from '../form/form.service';
// import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.scss']
})
export class InstituteListComponent implements OnInit {

  $instituteDatas:Observable<any>;
  constructor(private formService:FormService) { }

  ngOnInit() {
    this.$instituteDatas = this.formService.getInstitutes().valueChanges();
  }

}
