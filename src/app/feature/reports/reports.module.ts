import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { ViewsComponent } from './components/views/views.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ChartComponent , ViewsComponent , AnalyticsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [ChartComponent , ViewsComponent , AnalyticsComponent ] 
})
export class ReportsModule { }
