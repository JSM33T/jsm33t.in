import { Component, OnInit } from '@angular/core';
import { acToast, initAos, initParallax, initSmoothScroll } from '../global/global';
import { ApiserviceService } from '../services/apiservice.service';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiserviceService]
})
export class HomeComponent implements OnInit {
  responseMessage: string ="";
  constructor(private dataService: ApiserviceService,private http: HttpClient) { }

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
      this.submitMail(userEmail);
    }
    else {
      acToast('error', 'invalid email');
    };
  }


  postEmail(userEmail: any) {
    this.loading = true;
    this.dataService.postData('https://localhost:7138/api/mailinglist/subscribeext', {
      email: userEmail,
      origin: "angular test"
    })
      .pipe(
        catchError(error => {
          acToast('error', "api endpoint is temporarily down");
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

  submitMail(userEmail : any) {
    const payload = {
      email: userEmail,
      origin: 'ng new'
    };

    this.http.post<any>('https://almondcove.in/api/mailinglist/subscribeext', payload).subscribe(
      (response) => {
        this.responseMessage = response.success ? 'Mail submitted successfully' : 'Error: ' + 'Email already exists';
        acToast('info',this.responseMessage);
      },
      (error) => {
        this.responseMessage = 'An error occurred: ' + error.message;
        acToast('info','Something went wrong');
      }
    );
  }





}




