import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';

const routes: Routes = [
  {
    path:"",component:ProfileComponent
  },
  {
    path:"institute",component:InstituteProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
