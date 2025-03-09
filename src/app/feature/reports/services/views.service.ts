import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  private viewsData = {
    day: {
      labels: ['10p', '12a', '2a', '4p', '6a'],
      data: [5000, 12000, 8000, 15000, 9000],
    },
    week: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      data: [20000, 50000, 70000, 100000],
    },
    month: {
      labels: ['Feb', 'Mar', 'Apr', 'May'],
      data: [120000, 150000, 180000, 200000],
    },
  };

  getViewsData(filter: string) {
    return of(this.viewsData[filter as keyof typeof this.viewsData]);
  }
}
