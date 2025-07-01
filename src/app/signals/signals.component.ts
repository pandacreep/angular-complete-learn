import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    // this.counter.update((oldValue) => oldValue + 1);
    this.counter.set(this.counter() + 1);
    // this.actions.push('INCREMENT');
    this.actions.update((oldValue) => [...oldValue, 'INCREASE']);
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    // this.actions.push('DECREMENT');
    this.actions.update((oldValue) => [...oldValue, 'DECREASE']);
  }
}
