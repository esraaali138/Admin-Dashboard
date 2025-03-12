import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const routes: Routes = [
  {
    path: 'signup',
    component: AuthFormComponent,
  },
  {
    path: 'login',
    component: AuthFormComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
