import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
     <div>
            <button (click)="onClickButtonMinus()">-</button>
            <div class="count">{{ count }}</div>
            <button (click)="onClickButtonPlus()">+</button>
        </div>
    `,
})
export class CounterComponent {
    @Input()
    count: number = 0;

    onClickButtonPlus(){
        this.count++;
    }
    onClickButtonMinus(){
        this.count--;
    }

    constructor(){}
}
