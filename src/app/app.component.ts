import { Component } from '@angular/core';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/hero/hero-component';
import { ProjectsComponent } from './pages/projects/projects-component';
import { ContactComponent } from './pages/contact/contact-component';
NavbarComponent;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    AboutComponent,
    HeroeComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio2';
}
