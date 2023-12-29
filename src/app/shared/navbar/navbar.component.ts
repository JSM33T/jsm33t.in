import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navElements = [
    {
      link: 'Home',
      location: '/'
    },
    {
      link: 'About',
      location: '/about'
    },
    {
      link: 'Works',
      location: '/works'
    }
  ]
}
