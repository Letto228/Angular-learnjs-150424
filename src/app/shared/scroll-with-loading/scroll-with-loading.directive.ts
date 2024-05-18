import {Directive, HostListener, ElementRef, EventEmitter, Output} from '@angular/core';
import {LoadDirection} from './scroll-with-loading.directive.enum';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() readonly loadData = new EventEmitter<[LoadDirection, number?]>();

    lastScrollPosition = 0;

    constructor(private readonly el: ElementRef) {}

    @HostListener('scroll', ['$event'])
    scrollListener() {
        const scrollTop = Number(this.el.nativeElement.scrollTop.toFixed(1));

        if (scrollTop >= 100 && this.lastScrollPosition <= scrollTop) {
            this.loadData.emit([LoadDirection.Down, scrollTop]);
        } else if (scrollTop >= 100 && this.lastScrollPosition > scrollTop) {
            this.loadData.emit([LoadDirection.Up, scrollTop]);
        } else if (scrollTop < 100 && this.lastScrollPosition > scrollTop) {
            this.loadData.emit([LoadDirection.Up]);
        }

        this.lastScrollPosition = scrollTop;
    }
}
