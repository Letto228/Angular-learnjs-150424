import {createReducer, on} from '@ngrx/store';
import {ProductsState} from './products.state';
import {addProducts} from './products.actions';

const initialState: ProductsState = {
    data: null,
};

export const productsReducer = createReducer(
    initialState,
    on(addProducts, (state, action) => ({
        ...state,
        data: action.products,
    })),
);
