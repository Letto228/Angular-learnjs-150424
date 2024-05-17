import {Directive, Input, TemplateRef, ViewContainerRef, inject} from '@angular/core';
import {DumbNgIfContext} from './dumb-ng-if-context.interface';

@Directive({
    selector: '[appDumbNgIf]',
})
export class DumbNgIfDirective<T> {
    private readonly templateRef = inject<TemplateRef<DumbNgIfContext<T>>>(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);

    // constructor() {
    //     this.viewContainerRef.createEmbeddedView(this.templateRef);
    // }

    @Input() set appDumbNgIf(value: T) {
        const isContainerHasView = this.viewContainerRef.length;

        if (!isContainerHasView && value) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                data: value,
                appDumbNgIf: value,
                name: 'Egor',
                $implicit: value,
            });

            return;
        }

        if (isContainerHasView && !value) {
            this.viewContainerRef.clear();
        }
    }
}
