import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart, registerables } from 'chart.js';
import { ThemeService } from '../../../../core/services/theme.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  standalone: false,
})
export class ChartComponent implements OnInit {
  selectedFilter: string = 'week';
  chartInstance: any;
  isDark!: boolean;
  constructor(
    private chartService: ChartService,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.loadReportChart(this.selectedFilter);

    this.themeService.darkMode$.subscribe((theme) => {
      this.isDark = theme === 'dark';
      this.updateChart(this.selectedFilter);
    });
  }
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
              borderColor: this.isDark ? '#AAAAAA' : '#2563eb',
              backgroundColor: this.isDark
                ? '#357ABD'
                : 'rgba(37, 99, 235, 0.2)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    });
  }

  updateChart(filter: string) {
    this.selectedFilter = filter;
    this.loadReportChart(filter);
  }
}
