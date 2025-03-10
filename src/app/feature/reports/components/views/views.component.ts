import { Component, OnInit } from '@angular/core';
import { ViewsService } from '../../services/views.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.css',
  standalone: false,
})
export class ViewsComponent implements OnInit {
  constructor(private viewsServices: ViewsService) {}
  chartInstance: any;

  selectedFilter: string = 'day';

  ngOnInit(): void {
    this.loadViewChart(this.selectedFilter);
  }
  loadViewChart(filter: string = 'day') {
    this.viewsServices.getViewsData(filter).subscribe((res) => {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart('visitsChart', {
        type: 'bar',
        data: {
          labels: res.labels,
          datasets: [
            {
              label: 'Visits',
              data: res.data,
              backgroundColor: '#3b82f6',
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    });
  }

  updateView(filter: string) {
    this.selectedFilter = filter;
    this.loadViewChart(filter);
  }
}
