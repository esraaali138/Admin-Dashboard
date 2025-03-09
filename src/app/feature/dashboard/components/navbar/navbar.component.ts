import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false,
})
export class NavbarComponent {
  isShow: boolean = false;
  isLoggedIn = false;
  userDetails : any
  openDropdown() {
    this.isShow = !this.isShow;
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      const userData = localStorage.getItem('userData');
      this.userDetails = userData ? JSON.parse(userData) : null;
    });
  }

  logout() {
    this.authService.logOut();
  }
}
