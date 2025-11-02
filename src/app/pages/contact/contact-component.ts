import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-component.html',
})
export class ContactComponent {
  anio: number = new Date().getFullYear();
  gmail: string = 'mateo21cardozo@gmail.com';
  openCV() {
    const cvUrl = 'assets/cv/MateoCardozoCvES.pdf';
    window.open(cvUrl, '_blank');
  }
}
