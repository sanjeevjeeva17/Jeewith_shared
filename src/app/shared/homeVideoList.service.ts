import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { Response } from '@angular/http/src/static_response';

@Injectable()


export class HomeVideoListService{
    //HomeVideos = [];
    private _url:string = "assets/jsondata/homeMedia.json";

constructor(private _http: Http){

}
    getMedia(){
        return this._http.get(this._url)
        .map((response:Response) => response.json());
    }

}

