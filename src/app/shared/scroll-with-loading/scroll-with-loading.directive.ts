import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

export enum LoadDirection {
    Up = 'Up',
    Down = 'Down',
}

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() readonly loadData = new EventEmitter<LoadDirection>();

    @HostListener('scroll', ['$event.target'])
    onInfiniteScroll(target: HTMLInputElement) {
        const downParameter = target.scrollTop + target.offsetHeight;

        if (downParameter >= target.scrollHeight - 100) {
            this.trigger(LoadDirection.Down);
        }
    }

    trigger(direction: LoadDirection) {
        this.loadData.emit(direction);
    }
}
