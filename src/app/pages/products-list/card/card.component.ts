import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

const MAX_RATING = 5;

interface RatingArr {
    active: boolean;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() buyProduct: EventEmitter<Product | null> = new EventEmitter();

    get cardImageUrl() {
        return this.product?.images[0].url;
    }

    getRating(ratingNum: number): RatingArr[] {
        const ratingArr: RatingArr[] = [];

        for (let i = 1; i <= MAX_RATING; i++) {
            const ratingObj = {
                active: i <= ratingNum,
            };

            ratingArr.push(ratingObj);
        }

        return ratingArr;
    }

    onBuyClick(event: MouseEvent, product: Product | null): void {
        event.preventDefault();
        event.stopPropagation();
        this.buyProduct.emit(product);
    }
}
