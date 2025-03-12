import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../../feature/user/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fakeJwtToken = 'fake-jwt-token';
  private loggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  isLoggedIn$ = this.loggedIn.asObservable();

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
        return of(this.fakeJwtToken);
      } else {
        return throwError(
          () => new Error('The email or password is incorrect')
        );
      }
    }
    return throwError(() => new Error('No user found, please sign up first'));
  }

  setLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }

  logOut(): void {
    localStorage.removeItem('isLoggedIn');
    this.setLoggedIn(false);
    this.router.navigate(['/user/signup']);
  }
}
