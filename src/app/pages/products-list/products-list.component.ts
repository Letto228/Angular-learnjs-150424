import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);

    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('categoryId')),
        tap(categoryId => {
            this.productsStoreService.loadProducts(categoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(categoryId?: string) {
        this.productsStoreService.loadProducts(categoryId);
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackBy(_index: number, item: Product): string {
        return item._id;
    }
}
