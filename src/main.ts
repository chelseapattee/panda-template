import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Chelsea's Portfolio</span>
      <span style="flex: 1 1 auto"></span>
      
      <!-- Desktop Navigation -->
      <div class="desktop-nav">
        <a mat-button routerLink="/">Home</a>
        <button mat-button [matMenuTriggerFor]="projectsMenu">Projects</button>
        <mat-menu #projectsMenu="matMenu">
          <a mat-menu-item routerLink="/projects">All Projects</a>
          <a mat-menu-item routerLink="/projects/1">Project One</a>
          <a mat-menu-item routerLink="/projects/2">Project Two</a>
          <a mat-menu-item routerLink="/projects/3">Project Three</a>
        </mat-menu>
        <a mat-button routerLink="/contact">Contact</a>
      </div>

      <!-- Mobile Navigation -->
      <button mat-icon-button class="mobile-menu-button" [matMenuTriggerFor]="mobileMenu">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #mobileMenu="matMenu">
        <a mat-menu-item routerLink="/">Home</a>
        <button mat-menu-item [matMenuTriggerFor]="projectsMenuMobile">Projects</button>
        <a mat-menu-item routerLink="/contact">Contact</a>
      </mat-menu>
      <mat-menu #projectsMenuMobile="matMenu">
        <a mat-menu-item routerLink="/projects">All Projects</a>
        <a mat-menu-item routerLink="/projects/1">Project One</a>
        <a mat-menu-item routerLink="/projects/2">Project Two</a>
        <a mat-menu-item routerLink="/projects/3">Project Three</a>
      </mat-menu>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .desktop-nav {
      display: flex;
      align-items: center;
    }
    .mobile-menu-button {
      display: none;
    }
    @media (max-width: 768px) {
      .desktop-nav {
        display: none;
      }
      .mobile-menu-button {
        display: block;
      }
    }
  `]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});