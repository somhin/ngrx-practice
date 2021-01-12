import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customIncrement } from '../_state/counter.action';
import { getAuthor } from '../_state/counter.selectors';
import { CounterState } from '../_state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styles: [],
})
export class CustomInputComponent implements OnInit {
  value: number;
  author$: Observable<string>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.author$ = this.store.select(getAuthor);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
}
