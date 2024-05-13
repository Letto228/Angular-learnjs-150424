import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Output() cardClick = new EventEmitter<string>();

    @Output() buyClick = new EventEmitter<string>();

    @Input() product: Product | null = null;

    get firstProductImage(): string {
        if (this.product?.images.length) {
            return this.product.images[0].url;
        }

        return '';
    }

    cardClickEvent(value: string) {
        this.cardClick.emit(value);
    }

    buyClickEvent(event: MouseEvent, value: string) {
        event.preventDefault();
        event.stopPropagation();
        this.buyClick.emit(value);
    }
}
