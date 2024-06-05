import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';
import {BrandsService} from '../../shared/brands/brands.service';
import {ApplicationState} from '../../store/reducer';
import {productsFeature} from '../../store/products/products.state';
import {productsSelector} from '../../store/products/products.selectors';
import {loadProducts} from '../../store/products/products.actions';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly brandsService = inject(BrandsService);
    private readonly store$ = inject<Store<ApplicationState>>(Store);

    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.store$.dispatch(loadProducts({subCategoryId}));
            // this.productsStoreService.loadProducts(subCategoryId);
        }),
        // switchMap(() => this.productsStoreService.products$),
        // switchMap(() => this.store$.pipe(
        //     map(state => state[productsFeature].data?.map()),
        //     distinctUntilChanged(),
        // )),
        switchMap(() => this.store$.pipe(select(productsSelector))),
    );

    readonly brands$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.brandsService.loadBrands(subCategoryId);
        }),
        switchMap(() => this.brandsService.brands$),
    );

    constructor() {
        this.store$.subscribe(state => {
            // eslint-disable-next-line no-console
            console.log('State', state);

            // eslint-disable-next-line no-console
            console.log(productsFeature, state[productsFeature]);
        });
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackBy(_index: number, item: Product): string {
        return item._id;
    }
}
