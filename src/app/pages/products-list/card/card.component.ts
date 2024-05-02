import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

const MAX_RATING = 5;

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() readonly buyProduct = new EventEmitter<Product | null>();

    get cardImageUrl(): string | undefined {
        return this.product?.images[0].url;
    }

    getRating(ratingNum: number): boolean[] {
        return Array.from({length: MAX_RATING}, (_value, index) => index + 1 <= ratingNum);
    }

    onBuyClick(event: MouseEvent, product: Product | null): void {
        event.preventDefault();
        event.stopPropagation();
        this.buyProduct.emit(product);
    }
}
