import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordFormComponent } from './changepassword-form/changepassword-form.component';
import { PostsComponent } from './posts/posts.component'
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    LikeComponent,
    ZippyComponent,
    CoursesFormComponent,
    SignupFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    PostService,
    FollowersService,
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
