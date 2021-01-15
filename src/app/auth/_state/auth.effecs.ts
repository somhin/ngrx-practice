import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/_store/app.state';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/_store/shared/shared.actions';
import {
  autoLogin,
  Login,
  LoginSuccess,
  logoutAction,
  signUp,
  signUpSuccess,
} from './auth.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Login),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUser(data);

            console.log("save 'user' to local storage");

            this.authService.saveUserLocalStorage(user);

            return LoginSuccess({ user, redirect: true });
          }),
          catchError((errRes) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errRes.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUp),
      exhaustMap((action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authService.formatUser(data);

            this.authService.saveUserLocalStorage(user);

            return signUpSuccess({ user, redirect: true });
          }),
          catchError((errRes) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errRes.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  Redirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[LoginSuccess, signUpSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserLocalStorage();
        return of(LoginSuccess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logoutAction),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  // signupRedirect$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(signUpSuccess),
  //       tap((action) => {
  //         this.store.dispatch(setErrorMessage({ message: '' }));
  //         this.router.navigate(['/']);
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );
}
