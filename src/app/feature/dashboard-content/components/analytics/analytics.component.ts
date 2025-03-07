import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Analytics } from '../../models/analytics';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
  standalone: false,
})
export class AnalyticsComponent implements OnInit {
  constructor(private analyticsService: AnalyticsService) {}
  analyticsData!: Analytics[];
  ngOnInit(): void {
    this.analyticsService.getAnalytics().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.analyticsData = res;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
