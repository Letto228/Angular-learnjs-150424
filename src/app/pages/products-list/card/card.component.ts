import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product!: Product;
    @Output() buy = new EventEmitter<string>();

    buyProduct(product: Product) {
        this.buy.emit(product._id);
    }
}
