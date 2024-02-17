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
      heading: 'Almondcove.in: personal webspace',
      description: 'A personal webspace to work',
      image:'almondcove',
      link:'https://almondcove.in',
      tech:'Typescript,.NET 9,C#,ADO.NET,MS SQL'
    },
    {
      heading: 'Laymaann.in : a webspace/gallery/portfolio',
      description: 'A JAMSTACK webspace for documentaries and gallery for Laymaann',
      image:'laymaann',
      link:'https://laymaann.in',
      tech:'JASMSTACK - React,NextJS,Contentlayer,Typescript'
    },
    {
      heading: 'Finance management app',
      description: 'Finance/Donation management system for an organisation to manage monthly transactions with sms and mail integration and a custom auth & permission system',
      image:'financessystem',
      link:'some',
      tech:'Jquery,.NET 7->8,C#,Identity'
    },
    {
      heading: 'ERP System Modules',
      description: 'Building ERP modules with robust business logic to handle critical finance data securely and efficiently',
      image:'erp',
      link:'some',
      tech:'Jquery,.NET 7->8,C#,Identity'
    }
  ]

  ngOnInit(): void {
    
  }

  

}
