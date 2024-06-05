import {ActionReducerMap} from '@ngrx/store';
import {productsReducer} from './products/products.reducer';
import {ProductsState, productsFeature} from './products/products.state';

export interface ApplicationState {
    [productsFeature]: ProductsState;
}

export const storeReducer: ActionReducerMap<ApplicationState> = {
    [productsFeature]: productsReducer,
};
