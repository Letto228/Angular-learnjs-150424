import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;

    cardClick(e: string) {
        console.log('$e card click');
    }

    buyClick(e: string) {
        console.log('$e buy click');
    }
}
