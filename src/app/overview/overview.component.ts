import { Component, OnInit, Input } from '@angular/core';
import { Courses, Jobs, Review, Header } from '../profile/profile.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input("courses") courses:Courses;
  @Input("jobs") jobs:Jobs;
  @Input("reviews") reviews:Review;
  @Input("headers") headers:Header;

  constructor() { }

  ngOnInit() {
  }

}
