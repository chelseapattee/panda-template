import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { title } from 'process';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  template: `
    <div class="container">
      <h1 class="mat-display-1">My Projects</h1>
      <div class="project-grid">
        @for (project of projects; track project.id) {
          <mat-card>
            <mat-card-header>
              <mat-card-title>{{project.title}}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>{{project.description}}</p>
            </mat-card-content>
            <mat-card-actions>
              <a mat-button color="primary" [routerLink]="['/projects', project.id]">Learn More</a>
            </mat-card-actions>
          </mat-card>
        }
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of project three',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'This is a description.',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'This is a description.',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'This is a description.',
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'This is a description.',
    },
  ];
}
