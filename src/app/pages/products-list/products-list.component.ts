import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;

    cardClick(id: string) {
        // eslint-disable-next-line no-console
        console.log(`${id} card click`);
    }

    buyClick(id: string) {
        // eslint-disable-next-line no-console
        console.log(`${id} buy click`);
    }
}
