import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    products: Product[] | null = null;

    // For easy
    name = 'Мышь';

    // For hard
    readonly propertyName = 'feedbacksCount' as const; // keyof Product
    searchPropertyValue = 5;

    ngOnInit() {
        this.products = productsMock;
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }
}
