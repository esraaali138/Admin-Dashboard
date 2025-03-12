import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `
    <app-sidebar></app-sidebar>
    <div
      class="layout flex flex-col"
      [ngClass]="{ 'rtl-content': isRTL, 'ltr-content': !isRTL }"
    >
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

  isRTL = false;

  constructor(private translationService: TranslationService) {
    this.translationService.language$.subscribe((lang) => {
      this.isRTL = lang === 'ar';
    });
  }
}
