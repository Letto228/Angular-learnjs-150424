import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsState, productsFeature} from './products.state';

// export const productsFeatureSelector =
//     createFeatureSelector<ApplicationState[typeof productsFeature]>(productsFeature);
export const productsFeatureSelector = createFeatureSelector<ProductsState>(productsFeature);
// (state): ProductsState => state[productsFeature];

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     userFeatureSelector,
//     (productsState: ProductsState, userState: UserState) => , //extractFunction
// );
// (state: ApplicationState) => extractFunction(
//      productsFeatureSelector(state),
//      userFeatureSelector(state),
// )

export const productsSelector = createSelector(
    productsFeatureSelector,
    (productsState: ProductsState) => productsState.data, // extractFunction
);
// (state: ApplicationState) => extractFunction(productsFeatureSelector(state))
