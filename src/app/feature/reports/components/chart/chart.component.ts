import { Component } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  standalone: false,
})
export class ChartComponent {
  selectedFilter: string = 'week';
  chartInstance: any;
  constructor(private chartService: ChartService) {}

  loadReportChart(filter: string = 'week') {
    this.chartService.getReportData(filter).subscribe((res) => {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart('reportChart', {
        type: 'line',
        data: {
          labels: res.labels,
          datasets: [
            {
              label: 'Sales',
              data: res.data,
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37, 99, 235, 0.2)',
              fill: true,
            },
          ],
        },
      });
    });
  }

  updateChart(filter: string) {
    this.selectedFilter = filter;
    this.loadReportChart(filter);
  }
  // ngOnInit() {

  // }
}
