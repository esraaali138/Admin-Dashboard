import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  private viewsData = {
    day: {
      labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
    },
    week: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    },
  };

  getViewsData(filter: string) {
    return of(this.viewsData[filter as keyof typeof this.viewsData]);
  }
}
