import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule , BrowserModule],
  exports : [AuthFormComponent]

})
export class UserModule {}
