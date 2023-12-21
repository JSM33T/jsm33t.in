import { Component, OnInit } from '@angular/core';
import { initAos, initSmoothScroll } from '../../../global/global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  //social links
  socialLinks = [
    { platform: 'Instagram', icon: 'ai-instagram', url: 'https://instagram.com/jsm33t' },
    { platform: 'Facebook', icon: 'ai-facebook', url: 'https://facebook.com/iamjsm33t' },
    { platform: 'YouTube', icon: 'ai-github', url: 'https://github.com/jsm33t' }
  ];
  ngOnInit(): void {
    //trigger bindings of vendor pkugins on component load
    initAos();
     initSmoothScroll();
  }
}
