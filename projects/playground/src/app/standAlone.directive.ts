import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[standAloneAttribute]',
  standalone: true
})
export class standAloneDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
