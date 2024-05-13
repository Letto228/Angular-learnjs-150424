import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    inject,
} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    // private previousRating = 0;

    @Input() product: Product | null = null;

    @Output() readonly buy = new EventEmitter<Product['_id']>();

    constructor() {
        // this.changeDetectorRef.detach();
        setInterval(() => {
            this.changeDetectorRef.detectChanges();
        }, 1000);
    }

    // ngDoCheck(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngDoCheck');

    //     if (this.previousRating !== this.product?.rating) {
    //         // eslint-disable-next-line no-console
    //         console.log(this.product?.rating);

    //         this.previousRating = this.product?.rating || 0;

    //         this.changeDetectorRef.detectChanges();
    //     }
    // }

    onProductBuy(event: Event) {
        event.stopPropagation();

        if (this.product) {
            this.buy.emit(this.product._id);
        }
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product && this.product.rating >= starIndex;
    }

    currency(price: number | undefined) {
        // eslint-disable-next-line no-console
        console.log('Calculated method');

        return `${price || 0} $`;
    }
}
