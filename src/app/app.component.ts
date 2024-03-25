import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WelcomeComponent,
    ToolbarComponent,
    RouterOutlet,
    SocialMediaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Fit-app';
}
