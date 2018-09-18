import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent' ;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }
}
