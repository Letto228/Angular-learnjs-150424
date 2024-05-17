import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, map, merge, of, shareReplay, timer} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // private readonly destroy$ = new Subject<void>();
    // private readonly changeDetectorRef = inject(ChangeDetectorRef);

    // products: Product[] | null = null;

    readonly products$: Observable<Product[] | null> = merge(
        of(null),
        timer(3000).pipe(map(() => productsMock)),
        // eslint-disable-next-line rxjs/no-sharereplay
    ).pipe(shareReplay(1));

    // constructor() {
    // this.products$.pipe(takeUntil(this.destroy$)).subscribe(products => {
    //     this.products = products;
    //     // this.changeDetectorRef.markForCheck();
    // });
    // }

    // ngOnDestroy(): void {
    //     this.destroy$.next();
    //     this.destroy$.complete();
    // }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }
}
