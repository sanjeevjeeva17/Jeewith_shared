import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {  } from '@angular/material'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './/app-routing.module';
import { VideosComponent } from './videos/videos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { VideoListService } from './shared/videoList.service';
import { HomeVideoListService } from './shared/homeVideoList.service';
import { VideoFilterPipe } from './shared/videofilter.pipe';
import { BooksComponent } from './books/books.component';
import { ListenComponent } from './listen/listen.component';
import { PlayVideoComponent } from './playvideo/playvideo.component';
import { StoreClickedDirective } from './shared/storeClicked.directive';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HomepageComponent,
    VideoFilterPipe,
    BooksComponent,
    ListenComponent,
    PlayVideoComponent,
    StoreClickedDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
     RouterModule.forRoot(
      [{path: 'home', component: HomepageComponent},
      {path: 'video', component: VideosComponent},
      {path: 'listen', component: ListenComponent},
      {path: 'books', component: BooksComponent},
      {path: 'contact', component: ContactComponent},
      {path : 'playvideo', component : PlayVideoComponent, data : {some_data : 'some value'}},
      {path: '',     redirectTo: 'home', pathMatch: 'full' }]
    )
  ],
  providers: [VideoListService, VideoFilterPipe, HomeVideoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
