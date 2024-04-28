import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product!: Product;
    @Output() purchase = new EventEmitter<Product>();

    handlePurchase(event: Event) {
        event.stopPropagation();
        this.purchase.emit(this.product);
    }
}
