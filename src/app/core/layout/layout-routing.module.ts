import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components';
const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('../../feature/orders/orders.module').then((m) => m.OrdersModule),
  },

  { path: '**', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LayoutRoutingModule {}
