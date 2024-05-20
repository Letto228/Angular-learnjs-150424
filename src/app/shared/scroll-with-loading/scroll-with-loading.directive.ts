import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();

    scrollPos = 0;

    borderOffset = 100;

    constructor(private readonly elementRef: ElementRef) {}

    @HostListener('scroll')
    OnScroll(): void {
        const containerElement = this.elementRef.nativeElement;
        const scrollTop = containerElement.scrollTop;
        const scrollBottom =
            containerElement.scrollHeight -
            containerElement.scrollTop -
            containerElement.clientHeight;

        if (scrollTop > this.scrollPos) {
            if (scrollBottom <= this.borderOffset) {
                this.loadData.emit(LoadDirection.Down);
            }
        } else if (scrollTop <= this.borderOffset) {
            this.loadData.emit(LoadDirection.Up);
        }

        this.scrollPos = scrollTop;
    }
}
