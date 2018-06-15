import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }
  /*

  postEmail(name: String, email: String, message: String): Observable<string> {

    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'

    });
    let options = new RequestOptions({ headers: headers });

    let url = 'http://formspree.io/sanjeev.jeeva17@gmail.com';

    // WRONG
    // let data = {
    //   name: name,
    //   email: email,
    //   message: message
    // }

    // RIGHT
    let data = `name=${name}&email=${email}&message=${message}`;

    return this.http.post(url, data, options)
    .map(response => {
      console.log('email sent', response);
      return response;
    })
    .catch(this.handleError);
  }

private handleError(err, some) {
      // handle error
} */

}
