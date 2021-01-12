import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../_state/counter.action';
import { CounterState } from '../_state/counter.state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
