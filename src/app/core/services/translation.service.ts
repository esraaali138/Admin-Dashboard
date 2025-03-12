import {  Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en')
    this.loadTranslate();
    this.subscripeToTranslate()
  }
  private currentLang = new BehaviorSubject<string>('ar');
  language$ = this.currentLang.asObservable();

  toggleLang() {
    const lang = this.currentLang.getValue() === 'ar' ? 'en' : 'ar';
    console.log('Changing language to:', lang);
    this.currentLang.next(lang);
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
  
  private loadTranslate() {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.currentLang.next(savedLang);
    this.translate.use(savedLang);
  }

  private subscripeToTranslate(){
    this.language$.subscribe((lang)=>this.translate.use(lang))
  }
}
