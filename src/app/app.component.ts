import { Component, OnInit } from '@angular/core';
import { closeAllModals, initscrollToTop, themeSwitcher } from './global/global';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    initscrollToTop();
    themeSwitcher();
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log("route changed");
      closeAllModals();
      //window.scrollTo(0, 0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  }
  title = 'almondCoveNg';

}
