import {Directive, Input, TemplateRef, ViewContainerRef, inject} from '@angular/core';
import {DumbNgIfContext} from './dumb-ng-if-context.interface';

@Directive({
    selector: '[appDumbNgIf]',
})
export class DumbNgIfDirective<T> {
    private readonly templateRef = inject<TemplateRef<DumbNgIfContext<T>>>(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);

    @Input() set appDumbNgIf(value: T | null | undefined) {
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

    static ngTemplateContextGuard<T>(
        _directive: DumbNgIfDirective<T>,
        _context: unknown,
    ): _context is DumbNgIfContext<T> {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    static ngTemplateGuard_appDumbNgIf<T>(
        _directive: DumbNgIfDirective<T>,
        _inputValue: unknown,
    ): _inputValue is T {
        return true;
    }
}
