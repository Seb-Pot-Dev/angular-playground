import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
        <h4>compteur:</h4>
        <div style="display: flex; align-items:center;">
            <button (click)="onClickButtonMinus()">-</button>
            <div class="count">{{ count }}</div>
            <button (click)="onClickButtonPlus()">+</button>
        </div>
    `,
})
export class CounterComponent {

    @Input('initial-value')
    count: number = 0;    
     
    @Input('step')
    step: number = 1;
    
    onClickButtonPlus(){
        this.count += this.step;
    }
    onClickButtonMinus(){
        this.count -= this.step;
    }

    constructor(){}
}
