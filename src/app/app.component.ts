import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/_state/auth.action';
import { AppState } from './_store/app.state';
import { getErrorMessage, getLoading } from './_store/shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin());
  }
}