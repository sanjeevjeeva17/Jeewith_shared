import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ContactService } from './contact/contact.service';


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
    FormsModule,
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
  providers: [VideoListService, VideoFilterPipe, HomeVideoListService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
