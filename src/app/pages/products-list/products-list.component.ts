import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    products: Product[] | null = null;

    // For easy
    name = 'Планшет';

    // For hard
    readonly propertyName = 'feedbacksCount' as const; // keyof Product
    searchPropertyValue = 5;

    constructor() {
        setTimeout(() => {
            this.products = productsMock;
            this.changeDetectorRef.markForCheck();
        }, 2000);
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }
}
