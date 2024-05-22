import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

export enum LoadDirection {
    Top = 'top',
    Bottom = 'bottom',
}

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();

    borderOffset = 100;
    @HostListener('scroll', ['$event.target'])
    onScroll(target: HTMLElement): void {
        const scrollPosition = target.scrollTop;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;

        if (scrollPosition + clientHeight >= scrollHeight - this.borderOffset) {
            this.loadData.emit(LoadDirection.Bottom);
        }

        if (scrollPosition <= this.borderOffset) {
            this.loadData.emit(LoadDirection.Top);
        }
    }
}
