import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() readonly selectedForBuy = new EventEmitter<string>();

    onBuyClick(event: Event) {
        event.stopPropagation();

        this.selectedForBuy.emit(this.product?._id);
    }

    showIcon(rating: number | undefined, index: number): boolean {
        let isClassActive = false;

        if (!rating) {
            return isClassActive;
        }

        if (rating >= index + 1) {
            isClassActive = true;
        } else {
            isClassActive = false;
        }

        return isClassActive;
    }
}
