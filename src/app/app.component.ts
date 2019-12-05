import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyInstitute';
  loading:boolean = false;
  ngOnInit(){
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }
}
