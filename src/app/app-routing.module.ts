import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthFormComponent } from './feature/user/components/auth-form/auth-form.component';
import { LayoutComponent } from './feature/dashboard/components/layout.component';
import { ContentComponent } from './feature/dashboard/components/content/content.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'dashboard', component: ContentComponent },
      {
        path: 'orders',
        loadChildren: () =>
          import('./feature/orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./feature/user/user-routing.module').then(
        (m) => m.UserRoutingModule
      ),
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
