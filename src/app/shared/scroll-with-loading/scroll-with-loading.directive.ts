import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './scroll-with-loading.interface';

@Directive({
    selector: '[appScrollWithLoading]',
    standalone: true,
})
export class ScrollWithLoadingDirective {
    private readonly borderOffset = 100;
    private lastOffsetTop = 0;
    @Output() loadData = new EventEmitter<LoadDirection>();
    loadDirection: LoadDirection | null = null;

    @HostListener('scroll', ['$event.target'])
    onScroll(element: Element) {
        const {scrollTop: offsetTop, scrollHeight, clientHeight} = element;
        const lastOffsetTop = this.lastOffsetTop;

        this.lastOffsetTop = offsetTop;
        const offsetBottom = scrollHeight - offsetTop - clientHeight;

        this.loadDirection = offsetTop > lastOffsetTop ? LoadDirection.DOWN : LoadDirection.UP;

        if (offsetTop <= this.borderOffset && this.loadDirection === LoadDirection.UP) {
            this.loadData.emit(LoadDirection.UP);
        }

        if (offsetBottom <= this.borderOffset && this.loadDirection === LoadDirection.DOWN) {
            this.loadData.emit(LoadDirection.DOWN);
        }
    }
}
