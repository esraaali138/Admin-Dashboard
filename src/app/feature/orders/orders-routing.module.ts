import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { LayoutComponent } from '../dashboard/components/layout.component';
const routes: Routes = [
 
  { path: 'list', component: OrdersComponent }  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class OrdersRoutingModule {}


