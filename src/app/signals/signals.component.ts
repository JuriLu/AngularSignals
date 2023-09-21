import {NgForOf} from '@angular/common';
import {Component, signal} from '@angular/core';

@Component({
    selector: 'is-signals',
    templateUrl: './signals.component.html',
    standalone: true,
    imports: [
        NgForOf
    ],
})
export class SignalsComponent {
    actions = signal<string[]>([]);
    counter = signal<number>(0);  // Create signal

    increment(): void {
        // this.counter.set(this.counter() + 1);  //It just sets the new value
        this.counter.update((oldCounter: number) => oldCounter + 1)  //Update signal, different from (mutate) this return a NEW number ,doesn't change the existing value
        this.actions.mutate((oldActions: string[]) => oldActions.push('Increment')) // it changes the existing value (mutates)
    }

    decrement(): void {
        this.counter.update((oldCounter: number) => oldCounter - 1)
        this.actions.update((oldActions: string[]) => [...oldActions, 'DECREMENT']);
    }
}
