import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <div class="full-height center-content">
      <h1 class="mat-display-2">Hi. I'm Chelsea.</h1>
      <div class="button-group">
        <a mat-raised-button color="primary" routerLink="/projects">View my projects</a>
        <a mat-raised-button color="accent" routerLink="/contact">Contact me</a>
      </div>
    </div>
  `,
  styles: [`
    .button-group {
      margin-top: 2rem;
      gap: 1rem;
      display: flex;
    }
    .mat-display-2 {
      margin-bottom: 2rem;
    }
  `]
})
export class HomeComponent {}