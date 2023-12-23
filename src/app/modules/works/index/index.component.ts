import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initAos, initShuffle, initSmoothScroll } from '../../../global/global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    initAos();
  }


  navLinks = [
    { text: 'All', group: 'all' },
    { text: 'Web', group: 'web' },
    { text: 'Music Prod.', group: 'musicprod' },
    { text: 'Enterprise', group: 'enterprise' }
  ];

  articles = [
    {
      dataGroups: "musicprod",
      title: "Something",
      artists: "nothing",
      link: "asas",
      imageUrl: "/",
      year: "2023"
    },
    {
      dataGroups: "musicprod",
      title: "Something2",
      artists: "nothing",
      link: "asas",
      imageUrl: "/",
      year: "2023"
    }
  ];

  ngAfterViewInit(): void {
    initShuffle();
    initSmoothScroll();
  }

}
