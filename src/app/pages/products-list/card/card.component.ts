import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() readonly buyProduct = new EventEmitter<Product>();

    onClick(event: Event) {
        event.stopPropagation();

        if (this.product) {
            this.buyProduct.emit(this.product);
        }
    }

    getRatingStars(rating: number | undefined): number[] {
        if (typeof rating === 'number') {
            const stars = Math.floor(rating);

            return new Array(stars);
        }

        return []; // Возвращает пустой массив, если рейтинг не определен
    }
}
