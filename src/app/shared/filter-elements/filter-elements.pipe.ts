import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: Product[] | null, searchName: string): Product[] {
        if (!searchName || !products) {
            return [];
        }

        return products.filter(product =>
            product.name.toLowerCase().includes(searchName.toLowerCase()),
        );
    }
}
