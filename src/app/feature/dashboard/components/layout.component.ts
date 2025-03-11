import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `
      <app-sidebar></app-sidebar>
      <div class="layout flex flex-col ">
        <app-navbar></app-navbar>
        <main class="px-6 ">
          <router-outlet></router-outlet>
        </main>
      </div>
  `,
  styles: [
    `

    
      .layout {
        transition: margin-left 0.3s ease-in-out;
      }

      @media (min-width: 1024px) {
        .layout {
          margin-left: 300px;
        }
      }

      @media (max-width: 1023px) {
        .layout {
          margin-left: 0;
        }
      }
    `,
  ],
})
export class LayoutComponent {
  @Input() showLayout = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationEnd) {
      //   const currentRoute = event.urlAfterRedirects;

      //   if (
      //     currentRoute.includes('/user/') ||
      //     currentRoute.includes('/not-')
      //   )
      //     this.showLayout = false;
      //   else this.showLayout = true;
      // }
    });
  }
}
