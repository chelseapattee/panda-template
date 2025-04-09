import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <div class="project-header" [style.backgroundImage]="'url(' + project.headerImage + ')'">
    </div>

    <div class="container">
      <div class="project-metadata" #animatedSection>
        <div class="metadata-item">
          <h3>Project</h3>
          <p>{{project.title}}</p>
        </div>
        <div class="metadata-item">
          <h3>Company</h3>
          <p>{{project.company}}</p>
        </div>
        <div class="metadata-item">
          <h3>Technology</h3>
          <p>{{project.technology}}</p>
        </div>
        <div class="metadata-item">
          <h3>Role</h3>
          <p>{{project.roles}}</p>
        </div>
      </div>

      <section class="project-section" #animatedSection>
        <h2>Overview</h2>
        <p>{{project.overview}}</p>
      </section>

      <section class="project-section" #animatedSection>
        <h2>The Challenge</h2>
        <p>{{project.challenge}}</p>
      </section>

      @for (section of project.sections; track section.id) {
        <section class="project-section {{section.type}}" #animatedSection>
          @if (section.title) {
            <h2>{{section.title}}</h2>
          }
          
          @if (section.type === 'text-only') {
            <p>{{section.content}}</p>
          }

          @if (section.type === 'image-only') {
            <div class="full-width-image" [style.backgroundImage]="'url(' + section.image + ')'"></div>
          }

          @if (section.type === 'text-and-image') {
            <div class="text-image-layout">
              <div class="text-content">
                <p>{{section.content}}</p>
              </div>
              <div class="image-content" [style.backgroundImage]="'url(' + section.image + ')'"></div>
            </div>
          }

          @if (section.type === 'two-images' && (section.images ?? []).length >= 2) {
            <div class="two-images-layout">
              <div class="image-content" [style.backgroundImage]="'url(' + section.images?.[0] + ')'"></div>
              <div class="image-content" [style.backgroundImage]="'url(' + section.images?.[1] + ')'"></div>
            </div>
          }
        </section>
      }

      <section class="more-projects" #animatedSection>
        <div class="more-projects-header">
          <h2>More Projects</h2>
          <a mat-button color="primary" routerLink="/projects">
            View All
            <mat-icon>arrow_forward</mat-icon>
          </a>
        </div>
        <div class="more-projects-grid">
          @for (project of relatedProjects; track project.id) {
            <mat-card class="project-card" [routerLink]="['/projects', project.id]">
              <img [src]="project.image" [alt]="project.title">
              <mat-card-content>
                <h3>{{project.title}}</h3>
                <p>{{project.description}}</p>
              </mat-card-content>
            </mat-card>
          }
        </div>
      </section>
    </div>
  `,
  styles: [`
    .project-header {
      width: 100%;
      height: 37vw;
      max-height: calc(100vh - 250px);
      background-size: cover;
      background-position: center;
      margin-bottom: 2rem;
    }

    .project-metadata {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-bottom: 4rem;
      padding: 2rem 0;
      border-bottom: 1px solid #eee;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      will-change: opacity, transform;
    }

    .metadata-item h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 0.5rem;
    }

    .metadata-item p {
      font-size: 1.1rem;
      margin: 0;
    }

    .project-section {
      margin-bottom: 4rem;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      will-change: opacity, transform;
    }

    .project-section.visible,
    .project-metadata.visible,
    .more-projects.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .project-section:not(.visible),
    .project-metadata:not(.visible),
    .more-projects:not(.visible) {
      opacity: 0;
      transform: translateY(20px);
    }

    .project-section h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    .project-section p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
    }

    .full-width-image {
      width: 100%;
      height: 60vh;
      background-size: cover;
      background-position: center;
    }

    .text-image-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .text-content {
      padding: 2rem 0;
    }

    .image-content {
      height: 50vh;
      background-size: cover;
      background-position: center;
      border-radius: 8px;
    }

    .two-images-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .more-projects {
      margin-top: 6rem;
      padding-top: 4rem;
      border-top: 1px solid #eee;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      will-change: opacity, transform;
    }

    .more-projects-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .more-projects-header h2 {
      margin: 0;
    }

    .more-projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .project-card {
      cursor: pointer;
      transition: transform 0.2s;
    }

    .project-card:hover {
      transform: translateY(-4px);
    }

    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-card h3 {
      margin: 1rem 0 0.5rem;
      font-size: 1.2rem;
    }

    .project-card p {
      color: #666;
      margin: 0;
    }

    @media (max-width: 768px) {
      .project-metadata {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .text-image-layout,
      .two-images-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .more-projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .project-metadata {
        grid-template-columns: 1fr;
      }
      
      .more-projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
  animations: []
})
export class ProjectDetailComponent implements OnInit {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;
  
  project = {
    title: 'E-Commerce Platform Redesign',
    company: 'TechCorp Solutions',
    technology: 'Angular, Node.js, MongoDB',
    roles: 'Lead Frontend Developer, UX Designer',
    headerImage: 'https://picsum.photos/1920/1080',
    overview: 'A comprehensive redesign of an enterprise e-commerce platform serving over 1 million customers. The project focused on improving user experience, modernizing the technology stack, and implementing new features to drive conversion rates.',
    challenge: 'Transform a legacy e-commerce system into a modern, scalable platform while maintaining business continuity and improving performance metrics.',
    sections: [
      {
        id: 1,
        type: 'text-and-image',
        title: 'The Solution',
        content: 'We implemented a microservices architecture using Node.js and MongoDB, while modernizing the frontend with Angular. This allowed us to break down the monolithic application into manageable, scalable services.',
        image: 'https://picsum.photos/1920/1080?random=1'
      },
      {
        id: 2,
        type: 'image-only',
        image: 'https://picsum.photos/1920/1080?random=2'
      },
      {
        id: 3,
        type: 'text-only',
        title: 'Technical Architecture',
        content: 'The new architecture leverages containerization with Docker and Kubernetes for seamless deployment and scaling. We implemented a robust CI/CD pipeline using Jenkins and automated testing frameworks to ensure code quality and rapid deployment.'
      },
      {
        id: 4,
        type: 'two-images',
        images: [
          'https://picsum.photos/1920/1080?random=3',
          'https://picsum.photos/1920/1080?random=4'
        ]
      },
      {
        id: 5,
        type: 'text-and-image',
        title: 'Results',
        content: 'The redesigned platform achieved a 40% improvement in page load times, a 25% increase in conversion rates, and significantly reduced maintenance overhead. The new architecture supports rapid feature development and deployment.',
        image: 'https://picsum.photos/1920/1080?random=5'
      }
    ]
  };

  relatedProjects = [
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'A secure and intuitive mobile banking application',
      image: 'https://picsum.photos/800/600?random=6'
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      description: 'Analytics dashboard for healthcare providers',
      image: 'https://picsum.photos/800/600?random=7'
    },
    {
      id: 4,
      title: 'Smart Home IoT Platform',
      description: 'Connected device management system',
      image: 'https://picsum.photos/800/600?random=8'
    }
  ];

  private observer!: IntersectionObserver;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('Project ID:', params['id']);
    });
  }

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngAfterViewInit() {
    this.observeSections();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);
  }

  private observeSections() {
    this.animatedSections.forEach(section => {
      this.observer.observe(section.nativeElement);
    });
  }
}