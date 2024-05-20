import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() readonly buy = new EventEmitter<Product['_id']>();

    constructor() {
        // eslint-disable-next-line no-console
        console.log('CardComponent create');
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        if (this.product) {
            this.buy.emit(this.product._id);
        }
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product && this.product.rating >= starIndex;
    }
}
