import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initAos, initSmoothScroll } from '../../../global/global';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    initAos();
    initSmoothScroll();
  }
  
  items = [
    {
      heading: 'Laymaann.in : a webspace/gallery/portfolio',
      description: 'Some description',
      image:'',
      link:'some',
      tech:'Typescript, Vue js, .NET, C#, Razor Pages'
    },
    {
      heading: 'Almondcove.in: personal webspace',
      description: 'A personal webspace to work',
      image:'',
      link:'some',
      tech:'Typescript,Jquery,.NET,C#'
    },
    {
      heading: 'Aome other app',
      description: 'Finance/Donation management system for an organisation to manage monthly transactions with sms and mail integration and a custom auth & permission system',
      image:'',
      link:'some',
      tech:'Typescript,Jquery,.NET,C#'
    },
    {
      heading: 'ERP System Modules',
      description: 'Finance/Donation management system for an organisation to manage monthly transactions with sms and mail integration and a custom auth & permission system',
      image:'',
      link:'some',
      tech:'Typescript,Jquery,.NET,C#'
    }
  ]

  ngOnInit(): void {
    
  }

  

}
