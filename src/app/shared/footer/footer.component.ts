import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinks = [
    { platform: 'Instagram', icon: 'ai-instagram', url: 'https://instagram.com/jsm33t' },
    { platform: 'Facebook', icon: 'ai-facebook', url: 'https://facebook.com/iamjsm33t' },
    { platform: 'YouTube', icon: 'ai-github', url: 'https://github.com/jsm33t' }
  ];
}
