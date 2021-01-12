import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../_state/counter.action';
import { CounterState } from '../_state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styles: [],
})
export class CustomInputComponent implements OnInit {
  value: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
}
