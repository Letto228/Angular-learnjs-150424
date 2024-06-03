import {BehaviorSubject, Subscription} from 'rxjs';
import {Injectable, inject} from '@angular/core';
import {Product} from './product.interface';
import {ProductsApiService} from './products-api.service';
import {SubCategory} from '../categories/sub-category.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsStoreService {
    private readonly productsApiService = inject(ProductsApiService);

    private readonly productsStore$ = new BehaviorSubject<Product[] | null>(null);
    private readonly currentProductStore$ = new BehaviorSubject<Product | null>(null);

    private activeLoadProductsSubscription: Subscription | null = null;
    private activeLoadCurrentProductSubscription: Subscription | null = null;

    readonly products$ = this.productsStore$.asObservable();
    readonly currentProduct$ = this.currentProductStore$.asObservable();

    loadProducts(subCategoryId?: SubCategory['_id'] | null) {
        if (this.activeLoadProductsSubscription) {
            this.activeLoadProductsSubscription.unsubscribe();
        }

        this.activeLoadProductsSubscription = this.productsApiService
            .getProducts$(subCategoryId)
            .subscribe(products => {
                this.productsStore$.next(products);

                this.activeLoadProductsSubscription = null;
            });
    }

    loadProduct(id: Product['_id']) {
        if (this.activeLoadCurrentProductSubscription) {
            this.activeLoadCurrentProductSubscription.unsubscribe();
        }

        const productPreview = this.productsStore$.value?.find(({_id}) => _id === id);

        this.currentProductStore$.next(productPreview || null);

        this.activeLoadCurrentProductSubscription = this.productsApiService
            .getProduct$(id)
            .subscribe(product => {
                this.currentProductStore$.next(product || null);

                this.activeLoadCurrentProductSubscription = null;
            });
    }
}
