import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `
    <div class="flex h-screen gap-6 bg-[#F8FAFB] overflow-x-hidden">
      <app-sidebar></app-sidebar>

      <div class="flex flex-col  w-full">
        <app-navbar></app-navbar>
        <main class="px-10 flex-1">
          <router-outlet></router-outlet>

        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {}
