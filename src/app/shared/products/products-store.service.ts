import {BehaviorSubject, Subscription} from 'rxjs';
import {Injectable, inject} from '@angular/core';
import {Product} from './product.interface';
import {ProductsApiService} from './products-api.service';

@Injectable({
    providedIn: 'root',
})
export class ProductsStoreService {
    private readonly productsApiService = inject(ProductsApiService, {
        // optional: true,
        // skipSelf: true,
        // self: true,
    });

    private readonly productsStore$ = new BehaviorSubject<Product[] | null>(null);

    private activeLoadProductsSubscription: Subscription | null = null;

    readonly products$ = this.productsStore$.asObservable();

    // constructor(@Inject(ProductsApiService) private readonly productsApiService: ProductsApiService) {
    //     console.log(productsApiService);
    // }
    // constructor(private readonly productsApiService: ProductsApiService) {
    //     console.log(productsApiService);
    // }

    loadProducts() {
        if (this.activeLoadProductsSubscription) {
            this.activeLoadProductsSubscription.unsubscribe();
        }

        // this.activeLoadProductsSubscription = timer(2000)
        //     .pipe(map(() => productsMock))
        this.activeLoadProductsSubscription = this.productsApiService
            .getProducts$()
            .subscribe(products => {
                this.productsStore$.next(products);

                this.activeLoadProductsSubscription = null;
            });
    }
}
