import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() readonly buyedProduct: EventEmitter<Product | null> = new EventEmitter();

    getProductImageUrl(index: number): string | null {
        return this.product?.images && this.product?.images?.length > index
            ? this.product?.images[index]?.url
            : null;
    }

    getRating(index: number): boolean {
        return this.product?.rating ? this.product?.rating >= index : false;
    }

    onBuyClick() {
        this.buyedProduct.emit(this.product);
        // eslint-disable-next-line no-console
        console.log(this.product?.name?.concat(': "Меня выбрали! Я супер!"'));
    }
}
