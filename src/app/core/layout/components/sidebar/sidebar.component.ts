import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-home' , route: '/dashboard' },
    { label: 'Orders', icon: 'pi pi-shopping-cart' , route: '/orders' },
    { label: 'Users', icon: 'pi pi-user' },
    { label: 'Items', icon: 'pi pi-inbox' },
    { label: 'Transactions', icon: 'pi pi-wallet' },
    { label: 'Reports', icon: 'pi pi-file' },
    { label: 'Messages', icon: 'pi pi-envelope' },
    { label: 'Support', icon: 'pi pi-question-circle' },
    { label: 'Setting', icon: 'pi pi-cog' },
  ];

  selectedIndex: number = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
