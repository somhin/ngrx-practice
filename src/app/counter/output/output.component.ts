import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  counter: number;

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((data) => (this.counter = data.counter));
  }
}
