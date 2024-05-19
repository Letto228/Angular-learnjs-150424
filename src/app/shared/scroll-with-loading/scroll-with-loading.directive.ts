import {Directive, ElementRef, EventEmitter, HostListener, Output, inject} from '@angular/core';
import {LoadDirection} from './scroll-with-loading.interface';

@Directive({
    selector: '[appScrollWithLoading]',
    standalone: true,
})
export class ScrollWithLoadingDirective {
    private readonly element = inject(ElementRef).nativeElement;
    private readonly borderOffset = 100;

    @Output() loadData = new EventEmitter<LoadDirection>();

    loadDirection: LoadDirection | null = null;
    lastOffsetTop = this.element.scrollTop;

    @HostListener('scroll', ['$event'])
    onScroll() {
        const {scrollTop: offsetTop, scrollTopMax} = this.element;
        const offsetBottom = scrollTopMax - offsetTop;

        if (offsetTop <= this.borderOffset && offsetTop <= this.lastOffsetTop) {
            this.loadData.emit(LoadDirection.UP);
        }

        if (offsetBottom <= this.borderOffset && offsetTop >= this.lastOffsetTop) {
            this.loadData.emit(LoadDirection.DOWN);
        }

        this.lastOffsetTop = this.element.scrollTop;
    }
}
