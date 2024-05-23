import {
    Directive,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, filter, map, Subject, takeUntil} from 'rxjs';
import {IPaginationContext} from './pagination-context.interface';
import {chunk} from './chunk';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges, OnInit, OnDestroy {
    private readonly currentIndex$ = new BehaviorSubject<number>(0);
    private readonly destroy$ = new Subject<void>();

    private groupedItems: T[][] = [];

    @Input() appPaginationOf: T[] | undefined | null;
    @Input() appPaginationChankSize = 4;

    get shouldShowItems(): boolean {
        return Boolean(this.appPaginationOf?.length);
    }

    constructor(
        private readonly viewContainer: ViewContainerRef,
        private readonly template: TemplateRef<IPaginationContext<T>>,
    ) {}

    static ngTemplateContextGuard<T>(
        _directive: PaginationDirective<T>,
        _context: unknown,
    ): _context is IPaginationContext<T> {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    static ngTemplateGuard_appPaginationOf<T>(
        _directive: PaginationDirective<T>,
        _inputValue: T[] | undefined | null,
    ): _inputValue is T[] {
        return true;
    }

    ngOnChanges({appPaginationOf, appPaginationChankSize}: SimpleChanges) {
        if (appPaginationOf || appPaginationChankSize) {
            this.updateView();
        }
    }

    ngOnInit() {
        this.listenCurrentIndex();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private updateView() {
        if (!this.shouldShowItems) {
            this.viewContainer.clear();

            return;
        }

        this.groupedItems = chunk(this.appPaginationOf, this.appPaginationChankSize);
        this.currentIndex$.next(0);
    }

    private listenCurrentIndex() {
        this.currentIndex$
            .pipe(
                filter(() => this.shouldShowItems),
                map(currentIndex => this.getCurrentContext(currentIndex)),
                takeUntil(this.destroy$),
            )
            .subscribe(context => {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.template, context);
            });
    }

    private getCurrentContext(currentIndex: number): IPaginationContext<T> {
        return {
            $implicit: this.groupedItems[currentIndex],
            index: currentIndex,
            pageIndexes: this.groupedItems.map((_, index) => index),
            appPaginationOf: this.appPaginationOf as T[],
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
            selectIndex: (index: number) => {
                this.selectIndex(index);
            },
        };
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        const newIndex = nextIndex < this.groupedItems.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const newIndex = previousIndex >= 0 ? previousIndex : this.groupedItems.length - 1;

        this.currentIndex$.next(newIndex);
    }

    private selectIndex(index: number) {
        this.currentIndex$.next(index);
    }
}
