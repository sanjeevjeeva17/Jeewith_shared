import { Component, OnInit } from '@angular/core';
import { HomeVideoListService } from '../shared/homeVideoList.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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
