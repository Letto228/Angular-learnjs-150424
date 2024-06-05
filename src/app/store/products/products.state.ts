import {Product} from '../../shared/products/product.interface';

export const productsFeature = 'products';

export interface ProductsState {
    data: Product[] | null;
}
