import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { HomeVideoListService } from '../shared/homeVideoList.service';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayVideoComponent implements OnInit {

  visibleHomeMedia =[]; 

  constructor(private _HomevideoListService: HomeVideoListService){
         // this.visibleVideos = this.HomevideoListService.getVideos();
        //  this.visibleAudios = this.HomevideoListService.getAudios();
        //  this.visibleBooks = this.HomevideoListService.getBooks();
      
  }

ngOnInit() {
  this._HomevideoListService.getMedia()
.subscribe(data => this.visibleHomeMedia = data);
//this.visibleVideos = this.test.VIDEO;
 // alert(this.test);
}

  
  }
