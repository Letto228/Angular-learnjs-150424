import {Component} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock: Product[] = productsMock;

    onSelectedForBuy(productId: string) {
        console.info(`${productId} selected for  buy`);
    }
}
