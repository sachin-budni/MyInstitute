import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { InstituteOverviewComponent } from './institute-overview/institute-overview.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { NewjobComponent } from './newjob/newjob.component';
import { NewReviewComponent } from './new-review/new-review.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    OverviewComponent,
    InstituteProfileComponent,
    InstituteOverviewComponent,
    NewCourseComponent,
    NewjobComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  entryComponents:[NewCourseComponent,NewjobComponent,NewReviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
