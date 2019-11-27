import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"candidate",component:ProfileComponent
  },
  {
    path:"institute",component:InstituteProfileComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",redirectTo:"candidate",pathMatch:"full"
  },
  {
    path:"**",redirectTo:"candidate",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
