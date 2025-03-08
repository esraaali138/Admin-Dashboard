import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  exports: [AuthFormComponent],
})
export class UserModule {}
