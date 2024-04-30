import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
    @Input() product: Product | null = null;
    @Output() buyProduct = new EventEmitter<string>();

    imageSrc: string | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        // eslint-disable-next-line dot-notation
        if (changes['product'] && changes['product'] !== null) {
            this.imageSrc = this.product?.images[0]?.url;
        }
    }

    onClick(productName: string | undefined): void {
        this.buyProduct.emit(productName);
    }
}
