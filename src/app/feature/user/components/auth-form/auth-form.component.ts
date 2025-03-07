import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
  standalone: false,
})
export class AuthFormComponent {
  isLogin = true;
    authForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.authForm = this.fb.group({
      username: ['', this.isLogin ? [] : [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  get formControls() {
    return this.authForm.controls;
  }
  
}
