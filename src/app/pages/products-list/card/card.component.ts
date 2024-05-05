import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() buyButtonClick = new EventEmitter<string | undefined>();

    getImage(): string | undefined {
        return this.product?.images[0].url;
    }

    getIdOnClick(event: MouseEvent) {
        event.stopPropagation();
        this.buyButtonClick.emit(this.product?._id);
    }
}
