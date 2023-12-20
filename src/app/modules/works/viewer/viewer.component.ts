import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  slug: string = "";
  AssetBase = 'your-asset-base-url';



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //const slug = params['slug'];
      this.slug = params['slug'];
    });


}
}