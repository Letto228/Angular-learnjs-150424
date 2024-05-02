import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() readonly buyedProduct = new EventEmitter();

    getProductImageUrl(index: number): string | null {
        if (!this.product?.images) {
            return null;
        }

        const images = this.product.images;

        return images.length > index ? images[index].url : null;
    }

    getRating(index: number): boolean {
        return this.product?.rating ? this.product.rating >= index : false;
    }

    onBuyClick() {
        this.buyedProduct.emit(this.product?._id);
        // eslint-disable-next-line no-console
        console.log(this.product?.name?.concat(': "Меня выбрали! Я супер!"'));
    }
}
