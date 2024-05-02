import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;

    @Output() addToCart = new EventEmitter<string>();

    buyClick() {
        this.addToCart.emit(this.product?._id);
    }
}
