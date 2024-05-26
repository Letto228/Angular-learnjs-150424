import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, map, merge, of, timer} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    activeClass = 1;

    products$: Observable<Product[] | null> = merge(
        of(null),
        timer(100).pipe(map(() => productsMock)),
    );

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackBy(_index: number, item: Product): string {
        return item._id;
    }

    getProducts(num: number, chankSize: number) {
        this.products$ = merge(
            of(null),
            timer(100).pipe(
                map(() =>
                    productsMock.slice(chankSize * (num - 1), chankSize * (num - 1) + chankSize),
                ),
            ),
        );
        this.activeClass = num;
    }
}
