import { Directive, ElementRef } from '@angular/core';
@Directive({
    selector: '[nonStandAloneAttribute]',
    standalone: false
    })
export class nonStandAloneDirective {
    constructor(private elementRef: ElementRef<HTMLElement>) {
        elementRef.nativeElement.addEventListener('mouseenter', () => {
            console.log('Mouse entered');
        } );
    }
}