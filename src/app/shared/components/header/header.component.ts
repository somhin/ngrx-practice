import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from 'src/app/auth/_state/auth.action';
import { isAuthenticated } from 'src/app/auth/_state/auth.selector';
import { AppState } from 'src/app/_store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(logoutAction());
  }
}
