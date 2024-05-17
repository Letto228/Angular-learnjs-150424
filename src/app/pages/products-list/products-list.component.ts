import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, map, merge, of, timer} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';
import {LoadDirection} from '../../shared/scroll-with-loading/enum/load-direction';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products$: Observable<Product[] | null> = merge(
        of(null),
        timer(3000).pipe(map(() => productsMock)),
    );

    onLoad(direction: LoadDirection) {
        // eslint-disable-next-line no-console
        console.log(direction);
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }
}
