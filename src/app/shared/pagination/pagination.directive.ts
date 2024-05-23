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
    private readonly currentIndex$ = new BehaviorSubject<number>(0);

    private readonly templateRef = inject<TemplateRef<PaginationContext<T>>>(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);

    private chunkSize: number | null = null;

    @Input() appPaginationOf: T[] | null | undefined;
    @Input() set appPaginationChunkSize(cs: number) {
        this.chunkSize = cs;
    }

    //  eslint-disable-next-line  @typescript-eslint/naming-convention
    static ngTemplateGuard_appPaginationOf<T>(
        _directive: PaginationDirective<T>,
        _inputValue: unknown,
    ): _inputValue is T[] {
        return true;
    }

    static ngTemplateContextGuard<T>(
        _directive: PaginationDirective<T>,
        _context: unknown,
    ): _context is PaginationContext<T> {
        return true;
    }

    ngOnChanges({appPaginationOf}: SimpleChanges): void {
        if (appPaginationOf) {
            this.updateView();
        }
    }

    ngOnInit(): void {
        this.listenCurrentIndex();
    }

    private updateView() {
        if (this.shouldShowItems()) {
            this.currentIndex$.next(0);

            return;
        }

        this.viewContainerRef.clear();
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

        return {
            $implicit: this.getProductsByPage(currentIndex),
            appPaginationOf,
            index: currentIndex,
            pageIndexes: [...new Array(this.getPageCount()).keys()],
            next: () => this.next(),
            back: () => this.back(),
            selectIndex: i => this.selectIndex(i),
        };
    }

    private getProductsByPage(index: number): T[] {
        if (
            this.appPaginationOf &&
            index < this.getPageCount() &&
            this.chunkSize &&
            this.chunkSize > 0
        ) {
            return this.appPaginationOf.slice(index * this.chunkSize, (index + 1) * this.chunkSize);
        }

        return [];
    }

    private getPageCount(): number {
        if (this.appPaginationOf && this.chunkSize && this.chunkSize > 0) {
            return Math.ceil(this.appPaginationOf.length / this.chunkSize);
        }

        return 0;
    }

    private selectIndex(index: number) {
        if (index < this.getPageCount() && index !== this.currentIndex$.value) {
            this.currentIndex$.next(index);
        }
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;

        if (nextIndex < this.getPageCount()) {
            this.currentIndex$.next(nextIndex);
        }
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;

        if (previousIndex >= 0) {
            this.currentIndex$.next(previousIndex);
        }
    }
}
