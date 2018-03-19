import { Input, Directive, ElementRef, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Directive({
    selector: '[storeClicked]'
})
export class StoreClickedDirective {
    constructor(private el: ElementRef, private router: Router) {
    }

    @Input() videoLink: string; // for ts code 'color' for html code 'myHighlight' i.e template component
    @Input() videoDescription: string;
    @Input() videotitle: string;
    @Input() videosubtitle: string;

    

    ngOnInit() {
        let link = this.videoLink;
        let description = this.videoDescription;
        let subtitle = this.videosubtitle;
        let title = this.videotitle;
    }
    @HostListener('click', ['$event']) onClick($event){
        // tslint:disable-next-line:no-console
        console.info('clicked: ' + $event);
        let object: any = {};
        object.link = this.videoLink;
        object.description = this.videoDescription;
        object.subtitle = this.videosubtitle;
        object.title = this.videotitle;

        localStorage.setItem('saved_data', JSON.stringify(object));
        this.router.navigate(['./playvideo']);
    }

   // @HostListener('mouseleave') onMouseLeave() {
       // this.highlight(null);
    // }

  //  private highlight(color: string) {
       // this.el.nativeElement.style.backgroundColor = color;
   // }
}