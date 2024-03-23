import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[nonStandAloneAttribute]',
    standalone: false
    })

export class nonStandAloneDirective {
    @HostBinding('style.backgroundColor')
    color = 'transparent'

    ngOnInit(): void {
        // ngOnInit permet d'être appelé après tout les décorateurs etc. Cela permet d'initialiser des directive dès le chargement de la page.
        this.color = this.baseColor;
    }

    @Input('background-color')
    backgroundColor ='yellow';

    @Input('base-color')
    baseColor = 'transparent';
    
    @HostListener('mouseenter')
    onMouseEnter() {
        this.color = 'yellow'
    }
    @HostListener('mouseout')
    onMouseOut() {
        this.color = this.baseColor
    }
    @HostListener('click')
    onMouseClick() {
        this.color = this.backgroundColor;
    }
}