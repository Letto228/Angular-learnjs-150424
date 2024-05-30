import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {filter, map, switchMap, tap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);

    readonly product$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        filter(Boolean),
        tap(productId => {
            this.productsStoreService.loadProduct(productId);
        }),
        switchMap(() => this.productsStoreService.currentProduct$),
    );
}
