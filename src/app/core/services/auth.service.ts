import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../../feature/user/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fakeJwtToken = 'fake-jwt-token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(
    this.isAuthenticatedUser()
  );
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {}

  signUp(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    return of('User registered successfully');
  }

  signIn(user: User) {
    const userDetails = localStorage.getItem('userData');
    if (userDetails) {
      const parsedData = JSON.parse(userDetails);
      if (
        parsedData.email === user.email &&
        parsedData.password === user.password
      ) {
        localStorage.setItem('jwt', this.fakeJwtToken);
        this.isLoggedInSubject.next(true);
        return of(this.fakeJwtToken);
      } else {
        return throwError(
          () => new Error('The email or password is incorrect')
        );
      }
    }
    return throwError(() => new Error('No user found, please sign up first'));
  }

  isAuthenticatedUser(): boolean {
    return localStorage.getItem('jwt') === this.fakeJwtToken;
  }

  logOut(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/user/login']);
  }
}
