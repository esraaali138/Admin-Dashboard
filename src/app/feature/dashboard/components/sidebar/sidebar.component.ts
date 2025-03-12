import { Component } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  isRTL = false;

  constructor(private translationService: TranslationService) {
    this.translationService.language$.subscribe((lang) => {
      this.isRTL = lang === 'ar';
    });
  }
  

  menuItems = [
    { label: 'dashboard.dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'dashboard.orders', icon: 'pi pi-shopping-cart', route: '/orders/list' },
    { label: 'dashboard.users', icon: 'pi pi-user' },
    { label: 'dashboard.items', icon: 'pi pi-inbox' },
    { label: 'dashboard.transactions', icon: 'pi pi-wallet' },
    { label: 'dashboard.reports', icon: 'pi pi-file' },
    { label: 'dashboard.messages', icon: 'pi pi-envelope' },
    { label: 'dashboard.support', icon: 'pi pi-question-circle' },
    { label: 'dashboard.settings', icon: 'pi pi-cog' }
  ];
  
  selectedIndex: number = 0;
  isOpen: boolean = false;

  setIndex(index: number) {
    this.selectedIndex = index;
    this.isOpen = false;
  }

  openSidebar() {
    this.isOpen = true;
  }
  closeSidebar() {
    this.isOpen = false;
  }
}
