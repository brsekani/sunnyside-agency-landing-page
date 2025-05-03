import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/layout/nav/nav.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ClientsTestimonialsComponent } from './features/clients-testimonials/clients-testimonials.component';
import { ProjectComponent } from './features/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    AboutUsComponent,
    ClientsTestimonialsComponent,
    ProjectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sunnyside-agency-landing';
}
