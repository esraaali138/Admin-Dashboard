import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as LayoutComponents from './components';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RouterModule } from '@angular/router';
import { DashboardContentModule } from '../../feature/dashboard-content/dashboard-content.module';
import { SharedModule } from '../../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { OrdersModule } from "../../feature/orders/orders.module";
import { UserModule } from "../../feature/user/user.module";
import { ReportsModule } from '../../feature/reports/reports.module';

@NgModule({
  declarations: [
    LayoutComponents.NavbarComponent,
    LayoutComponents.SidebarComponent,
    LayoutComponents.LayoutComponent,
    LayoutComponents.ContentComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RouterModule,
    DashboardContentModule,
    SharedModule,
    RouterModule,
    LayoutRoutingModule,
    OrdersModule,
    UserModule,
    ReportsModule
],
  exports: [LayoutComponents.LayoutComponent],
})
export class LayoutModule {}
