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
    this.dataService.postData('mailinglist/addmail', {
      email: userEmail,
      origin: "angular test"
    })
      .pipe(
        catchError(error => {
          console.log(error);
          if (error.status === 409) {
            acToast('error', 'Conflict: Email already exists');
          }
          return of({ message: null }); // Return an observable with a default response
        })
      )
      .subscribe(response => {
        this.loading = false;
        if (response.message !== null) {
          console.log('Post successful:', response);
          //acToast('success', response.message);
          acToast('success', response.message || 'Email added to list'); // Use a default message if response.message is null
        }
      });
  }



}




