import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | undefined;
    @Output() buyClicked = new EventEmitter<string>();

    get imageUrl(): string | undefined {
        return this.product?.images[0].url;
    }

    onBuyClicked(event: Event) {
        event.preventDefault();

        if (this.product) {
            this.buyClicked.emit(this.product._id);
        }
    }
}
