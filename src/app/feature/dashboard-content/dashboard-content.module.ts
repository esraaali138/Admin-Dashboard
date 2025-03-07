import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [CommonModule , SharedModule],
  exports: [AnalyticsComponent],
})
export class DashboardContentModule {}
