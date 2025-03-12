import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    ReactiveFormsModule,
    UserRoutingModule,
    CommonModule,
    TranslateModule,
  ],
  exports: [AuthFormComponent],
})
export class UserModule {}
