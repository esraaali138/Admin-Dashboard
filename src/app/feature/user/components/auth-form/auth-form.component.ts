import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  standalone: false,
})
export class AuthFormComponent {
  isLogin = true;
  authForm!: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get formControls() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.markAsTouched();
    if (this.authForm.invalid) return;

    this.loaderService.show();

    const newUser: User = {
      username: this.authForm.value.username,
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };

    if (this.isLogin) {
      this.authService.signIn(newUser).subscribe({
        next: (res) => {
          this.loaderService.hide();
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.loaderService.hide();
          this.errorMessage = err.message;
        },
      });
    } else {
      this.authService.signUp(newUser).subscribe({
        next: (res) => {
          this.loaderService.hide();
          this.isLogin = true;
        },
        error: (err) => {
          this.loaderService.hide();
          this.errorMessage = err.message;
        },
      });
    }
  }

  markAsTouched() {
    Object.values(this.authForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
