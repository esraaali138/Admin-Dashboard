import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./feature/orders/orders.module').then((m) => m.OrdersModule),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./feature/user/user-routing.module').then((m) => m.UserRoutingModule),
  },

  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
