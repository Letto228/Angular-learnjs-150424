import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    products: Product[] | null = null;

    constructor() {
        this.changeDetectorRef.detach();

        setTimeout(() => {
            this.products = productsMock;
            this.changeDetectorRef.detectChanges();
            // this.changeDetectorRef.markForCheck();
        }, 2000);

        setTimeout(() => {
            // this.products?.forEach(product => {
            //     product.rating = 5;
            // });
            this.products = productsMock.map(product => ({...product, rating: 5}));
            this.changeDetectorRef.detectChanges();
            // this.changeDetectorRef.markForCheck();
        }, 5000);

        setTimeout(() => {
            this.changeDetectorRef.reattach();
        }, 6000);

        setTimeout(() => {
            // this.products?.forEach(product => {
            //     product.feedbacksCount = 50;
            // });
            this.products = productsMock.map(product => ({...product, feedbacksCount: 50}));
            // this.changeDetectorRef.detectChanges();
            this.changeDetectorRef.markForCheck();
        }, 7000);

        // setInterval(() => {
        //     this.changeDetectorRef.detectChanges();
        // }, 1000);
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }
}
