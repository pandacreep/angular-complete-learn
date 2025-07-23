import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increase, decrement } from '../store/conter.actions';
// import { IncrementAction } from '../store/conter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increase({ value: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
  }
}
