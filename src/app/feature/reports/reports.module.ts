import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { ViewsComponent } from './components/views/views.component';



@NgModule({
  declarations: [ChartComponent , ViewsComponent],
  imports: [
    CommonModule
  ],
  exports : [ChartComponent , ViewsComponent]
})
export class ReportsModule { }
