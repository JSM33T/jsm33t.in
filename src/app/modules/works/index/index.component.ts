import {Component, OnInit } from '@angular/core'
import {initParallax, initSmoothScroll, initSwiper } from '../../../global/global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  ngOnInit(): void {
    initSmoothScroll();
  }

}
