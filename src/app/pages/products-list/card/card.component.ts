import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() products: Product | null = null;

    @Output() buyProduct = new EventEmitter<number>();

    productQuantity = 0;

    onClick(event: Event, num: number) {
        event.stopPropagation();
        this.productQuantity += num;
        this.buyProduct.emit(this.productQuantity);
    }

    getRatingStars(rating: number): number[] {
        return new Array(rating);
    }
}
