import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShortenPipe } from '../../pipes/shorten.pipe';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ShortenPipe],
  standalone: true,
  templateUrl: './projects-component.html',
})
export class ProjectsComponent {
  public projects: any[] = [
    {
      id: 'bricke',
      title: 'Bricke',
      logo: 'assets/img/portfolio/logo.svg',
      tags: ['Angular', 'AWS', 'ClooudFront', 'Serverless'],
      description:
        'At Bricke, an e-commerce platform dedicated to the exchange and sale of products between individuals, I work as a junior front-end developer. My responsibilities include problem analysis, defining use cases, and other related tasks. I use Angular for front-end development and Figma for designing views. The team consists of a technical lead front-end developer, two back-end developers, a product designer, and a tester. We use Kanban methodologies and manage the project through Trello.',
    },
    {
      id: 'farmanow',
      title: 'FarmaNow',
      logo: 'assets/img/portfolio/farmaNowlogo.png',
      tags: ['Angular', 'AWS', 'ClooudFront', 'Serverless'],

      description:
        "FarmaNow is an application in development designed to facilitate the search for nearby on-duty pharmacies and allow users to contact them from the comfort of their homes. Using the Ionic framework and integration with Mapbox, Farmapp offers an intuitive experience for locating pharmacies in real time. With a backend built on Serverless Framework, the app ensures efficiency and scalability. The app’s design, created in Figma, guarantees a smooth user experience. I am working on the app with the Bricke team, focused on enhancing Farmapp's utility and preparing it for launch. Farmapp has the potential to become an essential tool for those needing quick and convenient access to pharmaceutical services.",
    },
    {
      id: 'pizzaapp',
      title: 'PizzaApp',
      logo: 'assets/img/portfolio/pizzaapp-logo.png',
      tags: [
        'Angular',
        'Serverless',
        'AWS',
        'Lambda',
        'API Gateway',
        'DynamoDB',
      ],
      description:
        'At Pizzaapp, a site dedicated to the control and Creation of orders  of pizzas , I worked as a Fullstack developer. In this project I had the challenge pf creation and update of the application using Angular for the front-end and Serverless (Nodejs and using Lambdas) for the back-end.',
    },

    {
      id: 'spotiApp',
      title: 'SpotiApp Project',
      logo: 'assets/img/portfolio/spotiApplogo.png',
      tags: ['Angular', 'Bootstrap', 'Spotify API', 'Maps Integration'],
      description:
        'This project, developed from a Udemy course, uses Angular and Bootstrap to create an application that consumes the Spotify API. It includes route and parameter management in Angular, carousels with Bootstrap 4, and data retrieval about artists, albums, and audio via HTTP. Additionally, it handles asynchronous data with observables, binds text fields using ngModel, and offers Spotify widgets and audio playback with HTML5, as well as map integration.',
    },
    {
      id: 'acyac',
      title: 'Acyac',
      logo: 'assets/img/portfolio/acyacLogo.png',
      tags: ['PHP', 'Bootstrap', 'XAMPP', 'MySQL'],
      description:
        'ACyac is a website designed to manage events at a popular library and event hall. The site allows for CRUD operations (Create, Read, Update, and Delete) on events. The interface has been developed using Bootstrap, and the event data is stored in a local database hosted on a XAMPP server. The connection between the database and the application is made via PHP.',
    },
    {
      id: 'heroesApp',
      title: 'Heroes Project',
      logo: 'assets/img/portfolio/heroeslogo.png',
      tags: ['TypeScript', 'Angular CLI', 'Firebase', 'HTTP Module'],
      description:
        "This project, developed from a Udemy course, uses TypeScript, Angular CLI, and Bootstrap. It implements the HTTP module to interact with Firebase's RESTful services, performing operations like POST, GET, DELETE, and PUT. It also includes configurations in the Firebase console to manage services and data.",
    },

    {
      id: 'theweekend',
      title: 'The Weekend',
      logo: 'assets/img/portfolio/theweekendlogo.png',
      tags: ['Bootstrap', 'Node.js', 'JSON Backend'],
      description:
        'The Weekend is software designed to manage appointments at a barbershop of the same name. The project features a local backend developed in JSON and is built using Bootstrap for the website design. The application connects to a local Node.js backend, allowing users to book appointments through reservation forms and complete satisfaction surveys to evaluate their experience.',
    },

    {
      id: 'serverless',
      title: 'Serverless Project',
      logo: 'assets/img/portfolio/serverlessLogo.png',
      tags: ['Serverless', 'AWS Lambda', 'Angular CLI', 'JavaScript'],
      description:
        'This project uses technologies such as Serverless and AWS Lambda for the back-end, and Angular CLI for the front-end, with JavaScript as the main language. The application focuses on the presentation and management of Dragon Ball characters. It connects to a Lambda function that consumes a Dragon Ball API to retrieve and manage information about the characters.',
    },
    {
      id: 'listaTareas',
      title: 'Listas Tareas en Node',
      logo: 'assets/img/portfolio/cliProject.png',
      tags: ['Node.js', 'Inquirer', 'Yargs', 'Console Application'],
      description:
        'This project is an interactive console application developed as part of a Udemy course, using Node.js as the main framework. The application employs packages like Inquirer and Yargs to create a smooth and dynamic user experience in the command line. This approach allows for handling various operations efficiently with a user-friendly interface.',
    },
  ];
  showFullDescription: boolean = false;
  expandedProjectId: number | null = null;

  toggleDescription(id: number) {
    this.expandedProjectId = this.expandedProjectId === id ? null : id;
  }
}
