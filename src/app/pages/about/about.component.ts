import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  skills = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'SCSS', icon: 'fab fa-sass' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Node.js (Express)', icon: 'fab fa-node-js' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Serverless', icon: 'fas fa-cloud' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'MSA', icon: 'fas fa-cubes' },
    { name: 'MFE', icon: 'fas fa-object-group' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Trello', icon: 'fab fa-trello' },
    { name: 'Jira', icon: 'fab fa-jira' },
    { name: 'Scrum', icon: 'fas fa-users' },
    { name: 'Kanban', icon: 'fas fa-columns' },
  ];
}
