import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[confirm]',
    standalone: false
    })

export class confirmDirective {
    
    @Input('confirm-message')
    message = 'Êtes-vous sur?';


    @HostListener('click', ["$event"])
    onMouseClick(event: Event){
        return window.confirm(this.message);
    }
}