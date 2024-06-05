import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {Store} from '@ngrx/store';
import {addProducts, loadProducts} from './products.actions';
import {ProductsApiService} from '../../shared/products/products-api.service';
import {ApplicationState} from '../reducer';

@Injectable()
export class ProductsEffects {
    private readonly actions$ = inject(Actions);
    private readonly productsApiService = inject(ProductsApiService);
    private readonly store$ = inject<Store<ApplicationState>>(Store);

    readonly loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            // filter(action => action.type === loadProducts.type),
            ofType(loadProducts),
            // switchMap(action => ),
            switchMap(({subCategoryId}) =>
                this.productsApiService
                    .getProducts$(subCategoryId)
                    .pipe(map(products => addProducts({products}))),
            ),
        ),
    );

    // readonly loadProducts$ = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             // filter(action => action.type === loadProducts.type),
    //             ofType(loadProducts),
    //             // switchMap(action => ),
    //             switchMap(({subCategoryId}) =>
    //                 this.productsApiService.getProducts$(subCategoryId).pipe(
    //                     tap(products => {
    //                         this.store$.dispatch(addProducts({products}));
    //                     }),
    //                 ),
    //             ),
    //         ),
    //     {dispatch: false},
    // );
}
