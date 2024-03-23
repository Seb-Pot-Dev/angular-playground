import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[no-open]',
    standalone: false
    })

export class noOpenerDirective {
    
    ngOnInit(): void {
    }

    @HostListener('click')
    onMouseClick(){
        //angular applique un preventDefault sur les fonction avec decoration Hostlister qui renvoie false
        return false 
    }
}