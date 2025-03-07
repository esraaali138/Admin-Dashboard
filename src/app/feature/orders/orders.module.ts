import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { HttpClientModule } from '@angular/common/http';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersTableComponent, RecentOrdersComponent, OrdersComponent],
  imports: [CommonModule, HttpClientModule  , OrdersRoutingModule ],
  exports: [OrdersTableComponent, RecentOrdersComponent, OrdersComponent],
})
export class OrdersModule {}
