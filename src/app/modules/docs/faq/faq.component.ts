import { Component, OnInit } from '@angular/core';
import { initAos } from '../../../global/global';
import { ApiserviceService } from '../../../services/apiservice.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  faqs :any = [];
  constructor(private dataservice : ApiserviceService){}
  ngOnInit(): void {
    initAos();
    this.getFaqs();
  }

  getFaqs()
  {
   
    this.dataservice.getData('docs/faq') // Adjust the endpoint as needed
      .subscribe(response => {
        this.faqs = response;
        console.log('we got the response:', response);
      });
  }

}
