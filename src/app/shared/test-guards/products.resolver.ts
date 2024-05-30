import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {filter} from 'rxjs';
import {ProductsStoreService} from '../products/products-store.service';
import {Product} from '../products/product.interface';

export const productsResolver: ResolveFn<Product[] | null> = (_route, _state) => {
    const productsStoreService = inject(ProductsStoreService);

    productsStoreService.loadProducts();

    return productsStoreService.products$.pipe(filter(Boolean));
};
