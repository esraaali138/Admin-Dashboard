import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { ThemeService } from '../../../../core/services/theme.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false,
})
export class NavbarComponent {
  isShow: boolean = false;
  isLoggedIn = false;
  isDark: boolean = false;
  userDetails: any;
  openDropdown() {
    this.isShow = !this.isShow;
  }

  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
    private translateService : TranslationService,
  ) {
    this.themeService.darkMode$.subscribe(
      (theme) => (this.isDark = theme === 'dark')
    );
  }

  ngOnInit() {

    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      const userData = localStorage.getItem('userData');
      this.userDetails = userData ? JSON.parse(userData) : null;
    });
  }

  toggleTheme() {
    this.themeService.changeTheme();
  }
  logout() {
    this.authService.logOut();
  }
  toggleLang(){
    
    this.translateService.toggleLang()
  }
}
