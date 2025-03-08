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
      import('./feature/orders/orders.module').then(
        (m) => m.OrdersModule
      ),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./feature/user/user.module').then(
        (m) => m.UserModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

// { path: '**', component: ContentComponent }
