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

    readonly borderOffset = 100;
    @HostListener('scroll', ['$event.target'])
    onScroll(target: HTMLElement): void {
        const {scrollTop, scrollHeight, clientHeight} = target;
        const scrollTopAndClientHeightSum =  scrollTop + clientHeight;
        const scrollHeightMinusBorderOffset = scrollHeight - this.borderOffset;
        if (scrollTopAndClientHeightSum >= scrollHeightMinusBorderOffset) {
            this.loadData.emit(LoadDirection.Bottom);
        }

        if (scrollTop <= this.borderOffset) {
            this.loadData.emit(LoadDirection.Top);
        }
    }
}
