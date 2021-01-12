import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../_state/counter.state';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  counter$: Observable<{ counter: number }>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
