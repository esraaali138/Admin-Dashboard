import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    this.loadTheme();
    this.subscribeToThemeChanges();
  }
  private presentTheme = new BehaviorSubject<string>('light');
  darkMode$ = this.presentTheme.asObservable();

  changeTheme() {
    const themeValue =
      this.presentTheme.getValue() === 'light' ? 'dark' : 'light';
    this.presentTheme.next(themeValue);
    localStorage.setItem('theme', themeValue);
  }

  private applyTheme(theme: string) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }

  private subscribeToThemeChanges() {
    this.darkMode$.subscribe((theme) => this.applyTheme(theme));
  }
  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.presentTheme.next(savedTheme);
  }
}
