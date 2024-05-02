import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;

    addToCart(productId: string): void {
        // eslint-disable-next-line no-console
        console.log(`fake add to cart : ${productsMock.find(p => p._id === productId)?.name}`);
    }
}
