import { Analytics } from './../models/analytics';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor() {}
  data: Analytics[] = [
    {
      title: 'Total Revenue',
      amount: '$52.6k',
      change: '+3.4',
      icon: 'Icon_Total_Revenue.svg',
    },
    {
      title: 'Today Revenue',
      amount: '$1024',
      change: '-5.5',
      icon: 'Icon_Today Revenue.svg',
    },
    {
      title: 'Items Sold',
      amount: '22',
      change: null,
      icon: 'Icon_Sales.svg',
    },
    { title: 'Users Active', amount: '11', change: null, icon: 'Group 1.svg' },
  ];
  getAnalytics(): Observable<Analytics[]> {
    return of(this.data);
  }
}
