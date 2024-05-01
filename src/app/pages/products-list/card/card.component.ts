import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() readonly buy = new EventEmitter<string>();

    buyProduct(event: MouseEvent, product: Product | null) {
        event.stopPropagation();

        if (product) {
            this.buy.emit(product._id);
        }
    }
}
