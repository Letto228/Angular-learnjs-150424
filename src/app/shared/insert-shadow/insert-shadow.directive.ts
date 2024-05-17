import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    @HostBinding('style.boxShadow')
    private boxShadow = '';

    @HostListener('window:click')
    toggleShadow() {
        this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
    }
}
