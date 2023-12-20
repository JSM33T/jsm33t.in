import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { acToast, initAos, initSmoothScroll } from '../../../global/global';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  providers: [ApiserviceService]
})
export class MessageComponent implements OnInit{

  constructor(private dataService: ApiserviceService) { }
  ngOnInit(): void {
    initAos();
    initSmoothScroll();
  }
  loading = false;

  onSubmit(messageForm: NgForm): void {
    if (messageForm.valid) {
      const details: any ={
        name : messageForm.value.name,
        Origin : messageForm.value.topic,
        email : messageForm.value.email,
        messageText : messageForm.value,
        //agree : messageForm.value.agree
        //agree: messageForm.value.agree || false
      }
      this.postMessage(details);
    }
    else {
      acToast('error', 'invalid data');
    };
  }


  postMessage(details: any) {
    this.loading = true;
    console.log(details)
    this.dataService.postData('messages/add',details)
      .pipe(
        catchError(error => {
          console.log("error block" + error);
          if (error.status === 409) {
            acToast('error', 'Conflict');
          }
          return of({ message: "something went wrong" }); // Return an observable with a default response
        })
      )
      .subscribe(response => {
        this.loading = false;
        if (response.message !== null) {
          console.log('success block:', response);
          //acToast('success', response.message);
          acToast('success', response.message || 'Message sent!!'); // Use a default message if response.message is null
        }
      });
  }

}
