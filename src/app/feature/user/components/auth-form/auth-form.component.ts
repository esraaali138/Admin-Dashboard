import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

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
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
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

    const newUser: User = {
      username: this.authForm.value.username,
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };

    if (this.isLogin) {
      this.signIn(newUser);
    } else this.signUp(newUser);
  }
  private signUp(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));

    this.router.navigate(['/user/login']);
    this.isLogin = true;
  }
  private signIn(user: User) {
    const existingUserData = localStorage.getItem('userData');
    if (!existingUserData) {
      alert('No registered user found. Please sign up first.');
      return;
    }

    const storedUser: User = JSON.parse(existingUserData);

    if (
      storedUser.email !== user.email ||
      storedUser.password !== user.password
    ) {
      alert('Invalid email or password. Please try again.');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    this.authService.setLoggedIn(true);

    this.router.navigate(['/']);
  }

  markAsTouched() {
    Object.values(this.authForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
