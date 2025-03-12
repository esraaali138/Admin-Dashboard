import { Analytics } from '../models/analytics';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor() {}
  data: Analytics[] = [
    {
      title: 'reports.totalRevenue',
      amount: '$52.6k',
      change: '+3.4',
      icon: 'assets/images/public/Icon_Total_Revenue.svg',
    },
    {
      title: 'reports.todayRevenue',
      amount: '$1024',
      change: '-5.5',
      icon: 'assets/images/public/Icon_Today Revenue.svg',
    },
    {
      title: 'reports.itemsSold',
      amount: '22',
      change: null,
      icon: 'assets/images/public/Icon_Sales.svg',
    },
    {
      title: 'reports.usersActive',
      amount: '11',
      change: null,
      icon: 'assets/images/public/Group 1.svg',
    },
  ];
  getAnalytics(): Observable<Analytics[]> {
    return of(this.data);
  }
}
