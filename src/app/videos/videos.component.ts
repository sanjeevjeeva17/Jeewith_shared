import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { VideoListService } from '../shared/videoList.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {  
@Input() filterBy?: string = 'Bible Studies';
    visibleVideos: any[] = [];
    category: any = [];
    selected; any;
    title = this.filterBy;
    constructor(private videoListService: VideoListService) {
            }

     ngOnInit() {
                this.visibleVideos = this.videoListService.getVideos();
            const result = this.visibleVideos.map(a => a.category);
       this.category = this.removeDuplicateUsingFilter(result);
           console.log(this.category);
            }

    // ngOnChanges() {
    //     this.visibleVideos = this.videoListService.getVideos();
    //         const result = this.visibleVideos.map(a => a.category);
    //    this.category = this.removeDuplicateUsingFilter(result);
    //        console.log(this.category);
    // }
     removeDuplicateUsingFilter(arr) {
      const unique_array = arr.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
      });
      return unique_array;
  }

  selectedItem(item) {
    console.log(item);
    this.filterBy = item;
    this.title = this.filterBy;
  }

  isActive(item) {
        return this.filterBy === item;
  }

}
