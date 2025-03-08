import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `
  <h2>layout</h2>
    <div class=" bg-[#F8FAFB]">
      <app-sidebar></app-sidebar>
      <div class="layout flex flex-col ">
        <app-navbar></app-navbar>
        <main class="sm:px-6 px-0">
          <router-outlet></router-outlet>
        </main>
      </div>
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
export class LayoutComponent {}
