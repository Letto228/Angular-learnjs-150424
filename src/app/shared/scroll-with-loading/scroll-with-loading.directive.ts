import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './scroll-with-loading.interface';

@Directive({
    selector: '[appScrollWithLoading]',
    standalone: true,
})
export class ScrollWithLoadingDirective {
    private readonly borderOffset = 100;
    @Output() loadData = new EventEmitter<LoadDirection>();
    loadDirection: LoadDirection | null = null;

    @HostListener('scroll', ['$event.target'])
    onScroll(element: Element) {
        const {scrollTop: offsetTop, scrollHeight, clientHeight} = element;
        const offsetBottom = scrollHeight - offsetTop - clientHeight;

        if (offsetTop <= this.borderOffset) {
            this.loadData.emit(LoadDirection.UP);
        }

        if (offsetBottom <= this.borderOffset) {
            this.loadData.emit(LoadDirection.DOWN);
        }
    }
}
