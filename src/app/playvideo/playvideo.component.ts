import { Component, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayVideoComponent implements OnInit {
data: any;
    constructor() { }
  
    ngOnInit() {
      this.data = JSON.parse(localStorage.getItem('saved_data'));
      // tslint:disable-next-line:no-console
      console.info(this.data);
    }
  
  }
