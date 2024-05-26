/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
    inject,
} from '@angular/core';
import {BehaviorSubject, filter, map} from 'rxjs';
import {PaginationContext} from './pagination-context.interface';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges {
    private readonly chankSize = 4;
    private readonly currentIndex$ = new BehaviorSubject<number>(1);
    private activeIndex = 1;

    private readonly templateRef = inject<TemplateRef<PaginationContext<T>>>(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);

    @Input() appPaginationOf: T[] | null | undefined;

    static ngTemplateContextGuard<T>(
        _directive: PaginationDirective<T>,
        _context: unknown,
    ): _context is PaginationContext<T> {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    static ngTemplateGuard_appCarouselOf<T>(
        _directive: PaginationDirective<T>,
        _inputValue: unknown,
    ): _inputValue is T[] {
        return true;
    }

    ngOnInit(): void {
        this.listenCurrentIndex();
    }

    ngOnChanges({appPaginationOf}: SimpleChanges): void {
        if (appPaginationOf) {
            this.currentIndex$.next(this.activeIndex);
        }
    }

    private listenCurrentIndex() {
        this.currentIndex$
            .pipe(
                filter(() => this.shouldShowItems()),
                map(currentIndex => this.getCurrentContext(currentIndex)),
            )
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private shouldShowItems(): boolean {
        return Boolean(this.appPaginationOf?.length);
    }

    private getCurrentContext(currentIndex: number): PaginationContext<T> {
        const appPaginationOf = this.appPaginationOf as T[];

        const currentArray = this.appPaginationOf!.slice(
            this.chankSize * (currentIndex - 1),
            this.chankSize * (currentIndex - 1) + this.chankSize,
        );

        return {
            $implicit: currentArray,
            pageIndexes: 1,
            appPaginationOf,
            chankSize: this.chankSize,
            next: this.next.bind(this),
            back: this.back.bind(this),
        };
    }

    private next() {
        const amount = this.checkAmount();

        if (amount >= this.activeIndex + 1) {
            this.activeIndex += 1;
            this.currentIndex$.next(this.activeIndex);
        }
    }

    private back() {
        if (this.activeIndex > 1) {
            this.activeIndex -= 1;
            this.currentIndex$.next(this.activeIndex);
        }
    }

    checkAmount() {
        return Math.ceil(this.appPaginationOf!.length / this.chankSize);
    }
}
