import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { VideoListService } from '../shared/videoList.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnChanges {
  title ='recent vid';
@Input() filterBy?: string= 'BIBLE_DOC'
    visibleVideos: any[] =[];

    constructor(private videoListService: VideoListService){
            this.visibleVideos = this.videoListService.getVideos();
    }

    ngOnChanges(){
        this.visibleVideos =  this.videoListService.getVideos();
    }

}
