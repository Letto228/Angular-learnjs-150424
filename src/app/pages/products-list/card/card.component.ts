import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | undefined;

    @Output() readonly emitPurchasedProduct = new EventEmitter<Product>();

    onBuyButtonClick(event: Event) {
        event.preventDefault();
        this.emitPurchasedProduct.emit(this.product);
    }
}
