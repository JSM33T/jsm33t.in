import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../../../services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { acToast } from '../../../../global/global';
import { of } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  blogs: any[] = [];
  method: string = "";
  filter: string = "";
  apiurl: string = "";
  constructor(private route: ActivatedRoute, private dataService: ApiserviceService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Check if 'method' parameter is present
      const method = params['method'];
      const param = params['param'];
      if (method && param) {
        this.apiurl = "blogs/" + method + "/" + param;
      } else {
        this.apiurl = "blogs/get";
      }
      this.something(this.apiurl);
    });
  }

  something(apiUrl: string) {
    this.dataService.getData(apiUrl)
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
        if (response.message !== null) {
          console.log('success block:', response);
          this.blogs = response;
        }
      });
  }




}
