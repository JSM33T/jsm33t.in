import { Component, OnInit } from '@angular/core';
import { initAos, initSmoothScroll } from '../../../global/global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {
     initAos();
     initSmoothScroll();
  }

}
