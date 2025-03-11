import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkEnable = false;
  private presentTheme = new BehaviorSubject<string>('light');
  darkMode$ = this.presentTheme.asObservable();

  constructor() {
    this.loadTheme();
    this.subscribeToThemeChanges();
  }
  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme) {
      this.presentTheme.next(savedTheme);
    }
  }

  changeTheme() {
    const newTheme =
      this.presentTheme.getValue() === 'light' ? 'dark' : 'light';
    this.presentTheme.next(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  private applyTheme(theme: string) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    this.isDarkEnable = theme === 'dark';
  }

  private subscribeToThemeChanges() {
    this.darkMode$.subscribe((theme) => {
      this.applyTheme(theme);
    });
  }
}
