import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../data-models/cantactForm';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private service: ContactService) { }

  model = new ContactForm('', '', '');

  submitted = false;

  onSubmit(this: any) {
    this.submitted = true;
   console.log(this.model);
   this.service.postEmail(this.model.name.toString(), this.model.email.toString(), this.model.message.toString())
      .map(res => res)
      .subscribe(
        res => {},
        error => {
                  this.messageSentError = true;
                  this.emailForm.reset();
                  setTimeout(() => { this.messageSentError = false; }, 3000);
                  },
        () => {
          this.messageSentSuccess = true;
          setTimeout(() => { this.messageSentSuccess = false; }, 3000);
         }
      );
    }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value;
  }

}
