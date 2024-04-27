import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() selectedForBuy = new EventEmitter<string>();

    onBuyClick(event: Event, productId: string | undefined) {
        // event.stopPropagation();
        event.stopImmediatePropagation();

        if (!productId) {
            return;
        }

        this.selectedForBuy.emit(productId);
    }
}
