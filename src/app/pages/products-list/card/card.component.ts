import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() buyProduct = new EventEmitter<string>();

    onClick(event: Event) {
        event.preventDefault();

        if (this.product) {
            this.buyProduct.emit(this.product._id);
        }
    }
}
