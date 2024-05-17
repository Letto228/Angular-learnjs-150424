import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    // private readonly element = inject(ElementRef).nativeElement;
    // private readonly render = inject(Renderer2);
    // constructor() {
    // this.render.setStyle(this.element, '')
    // }

    // (evntName)="method($event)"
    // (click)="method()"
    // @HostListener('click', ['$event'])

    // @HostListener('touchstart', [
    //     '$event.changedTouches[0].clientX',
    //     '$event.changedTouches[0].clientY',
    // ])
    // @HostListener('mousedown', ['$event.clientX', '$event.clientY'])
    // onClick(xPosition: number, yPosition: number) {
    //     console.log('Clicked', this.element, xPosition, yPosition);
    // }

    // [style.boxShadow]="boxShadow"
    @HostBinding('style.boxShadow')
    private boxShadow = '';

    @HostListener('window:click')
    toggleShadow() {
        this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
    }
}
