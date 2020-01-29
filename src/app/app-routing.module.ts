import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InstituteListComponent } from './institute-list/institute-list.component';

const routes: Routes = [
  {
    path:"institute/:id",component:ProfileComponent
  },
  {
    path:"profile",component:InstituteProfileComponent
  },
  {
    path:"institutes",component:InstituteListComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",redirectTo:"institutes",pathMatch:"full"
  },
  {
    path:"**",redirectTo:"institutes",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
