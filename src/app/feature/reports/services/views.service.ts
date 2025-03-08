import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  private viewsData = {
    day: {
      labels: ['10p', '12a', '2a', '4p', '6a'],
    },
    week: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    },
    month: {
      labels: ['Feb', 'Mar', 'Apr', 'May'],
    },
  };

  getViewsData(filter: string) {
    return of(this.viewsData[filter as keyof typeof this.viewsData]);
  }
}
