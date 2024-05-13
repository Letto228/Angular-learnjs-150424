import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cardClick(id: string) {
        // eslint-disable-next-line no-console
        console.log('$id card click');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buyClick(id: string) {
        // eslint-disable-next-line no-console
        console.log('$id buy click');
    }
}
