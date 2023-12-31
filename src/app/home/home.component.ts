import { Component, OnInit } from '@angular/core';
import { acToast, initAos, initParallax, initSmoothScroll } from '../global/global';
import { ApiserviceService } from '../services/apiservice.service';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiserviceService]
})
export class HomeComponent implements OnInit {
  constructor(private dataService: ApiserviceService) { }

  loading = false;

  ngOnInit(): void {
    initAos();
    initSmoothScroll();
    initParallax();
   // this.getTopBlogs();
  }

  // getTopBlogs() {
  //   //    this.getDataFromApi();
  //   // this.dataService.getData('weatherforecast').subscribe(
  //   //   response => {
  //   //     console.log('Get successful:', response);
  //   //   },
  //   //   error => {
  //   //     console.error('Error during get:', error);
  //   //   }
  //   // );
  // }

  onSubmit(mailForm: NgForm): void {
    if (mailForm.valid) {
      const userEmail = mailForm.value.useremail;
      this.postEmail(userEmail);
    }
    else {
      acToast('error', 'invalid email');
    };
  }


  postEmail(userEmail: any) {
    this.loading = true;
    this.dataService.postData('mailinglist/subscribe', {
      email: userEmail,
      origin: "angular test"
    })
      .pipe(
        catchError(error => {
          acToast('error', error.message.status);
          console.log(error)
           return of({ message: error.error });
        })
      )
      .subscribe(response => {
        this.loading = false;
        console.log(response.message.status == 200);
        if(response.message.status == 200)
        {
          acToast('Success','Email added to list');
        }
      });
  }





}




