import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'Admin-Dashboard';

  showLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;

        this.showLayout = !currentRoute.includes('/user/login');
      }
    });
  }
}
