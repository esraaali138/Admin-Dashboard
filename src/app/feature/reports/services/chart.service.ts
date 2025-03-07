import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {

  private chartData = {
    day: {
      labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
      data: [5000, 12000, 8000, 15000, 9000],
    },
    week: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [20000, 50000, 70000,100000],
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [120000, 150000, 180000, 200000],
    },
  };
  getReportData(
    filter: string
  ) {
    return of(this.chartData[filter as keyof typeof this.chartData]);
  }
}
