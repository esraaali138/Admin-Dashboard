import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
@NgModule({
  declarations: [AuthFormComponent],
  imports: [ReactiveFormsModule, UserRoutingModule, CommonModule],
  exports: [AuthFormComponent],
})
export class UserModule {}
