import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() buyProduct = new EventEmitter<{quantity: number; productId: string}>();

    productQuantity = 0;

    onClick(event: Event, productId: string) {
        event.stopPropagation();
        this.productQuantity += 1;
        this.buyProduct.emit({quantity: this.productQuantity, productId});
    }

    getRatingStars(rating: number): number[] {
        const stars = Math.floor(rating);

        return new Array(stars);
    }
}
