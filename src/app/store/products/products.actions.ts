import {createAction, props} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';
import {SubCategory} from '../../shared/categories/sub-category.interface';

export enum ProductsActionTypes {
    AddProducts = '[Products] Add products',
    LoadProducts = '[Products] Load products',
}

export const addProducts = createAction(
    ProductsActionTypes.AddProducts,
    props<{products: Product[]}>(),
    // (props: {products: Product[]}) => props,
);

export const loadProducts = createAction(
    ProductsActionTypes.LoadProducts,
    props<{subCategoryId: SubCategory['_id'] | null}>(),
);

// addProducts({products: [...]}) => {type: ProductsActionTypes.AddProducts, ...{products: [...]}}
