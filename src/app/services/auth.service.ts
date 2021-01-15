import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { logoutAction } from '../auth/_state/auth.action';
import { AuthResponseData } from '../_models/authResponseData.model';
import { User } from '../_models/user.model';
import { AppState } from '../_store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeoutInterval: any;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}
    `,
      { email, password, returnSecureToken: true }
    );
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}
    `,
      { email, password, returnSecureToken: true }
    );
  }

  saveUserLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.createTimeoutInterval(user);
  }

  getUserLocalStorage() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );

      this.createTimeoutInterval(user);
      return user;
    }
    return null;
  }

  createTimeoutInterval(user: User) {
    const saveDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();
    const timeInterval = expirationDate - saveDate;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(logoutAction());
    }, timeInterval);
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found.';
      case 'INVALID_PASSWORD':
        return 'Invalid password';
      case 'EMAIL_EXISTS':
        return 'Email is already exist';
      default:
        return 'Unknown error occurred. Please try again.';
    }
  }
}
