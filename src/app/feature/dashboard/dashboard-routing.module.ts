import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { ContentComponent } from './components/content/content.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: ContentComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
