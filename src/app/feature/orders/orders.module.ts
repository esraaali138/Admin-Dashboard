import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OrdersTableComponent, OrdersComponent],
  imports: [CommonModule, HttpClientModule, OrdersRoutingModule, SharedModule,TranslateModule],
  exports: [OrdersTableComponent, OrdersComponent],
})
export class OrdersModule {}
