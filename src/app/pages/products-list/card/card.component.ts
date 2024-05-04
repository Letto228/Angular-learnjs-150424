import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | undefined = undefined;

    @Output() emitPurchasedProduct = new EventEmitter<Product>();

    onBuyButtonClick() {
        this.emitPurchasedProduct.emit(this.product);
    }
}
