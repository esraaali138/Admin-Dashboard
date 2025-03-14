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
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, LayoutComponent ,ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportsModule,
    OrdersModule,
    DashboardRoutingModule,
    RouterModule,
    TranslateModule
],
  exports: [LayoutComponent , SidebarComponent],
})
export class DashboardModule {}
