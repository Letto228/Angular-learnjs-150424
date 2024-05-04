import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Product} from 'src/app/shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;

    constructor(private readonly snackBar: MatSnackBar) {}

    onBuyProduct(product: Product | null): void {
        this.snackBar.open(`${product?.name} добавлен(a) в корзину`, 'OK');
    }
}
