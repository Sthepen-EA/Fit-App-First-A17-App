import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models';
import { MainContainerComponent } from '../layout';
import { WobbleDirective } from '../directives/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    SocialMediaElementComponent,
    MainContainerComponent,
    WobbleDirective,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Facebook',
      link: 'https://facebook.com',
      imgPath: 'assets/images/social-media/fb-logo.webp',
    },
    {
      name: 'X',
      link: 'https://x.com',
      imgPath: 'assets/images/social-media/x-logo.webp',
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com',
      imgPath: 'assets/images/social-media/ig-logo.webp',
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com',
      imgPath: 'assets/images/social-media/linkedin-logo.png',
    },
    {
      name: 'Github',
      link: 'https://github.com',
      imgPath: 'assets/images/social-media/github-logo.png',
    },
  ];
}
