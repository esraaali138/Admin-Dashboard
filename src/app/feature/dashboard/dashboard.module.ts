import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { ContentComponent } from './components/content/content.component';
import { ReportsModule } from "../reports/reports.module";
import { OrdersModule } from "../orders/orders.module";
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, LayoutComponent ,ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReportsModule,
    OrdersModule,
    DashboardRoutingModule
],
  exports: [LayoutComponent],
})
export class DashboardModule {}
