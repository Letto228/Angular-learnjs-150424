import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;

    addProductToCart({quantity, productId}: {quantity: number; productId: string}) {
        console.log(`товар ${productId} добавлен в корзину в количестве: ${quantity} штук`); // eslint-disable-line
    }
}
