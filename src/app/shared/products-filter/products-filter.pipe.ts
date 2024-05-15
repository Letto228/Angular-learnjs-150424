import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: Product[] | null, searchName: string): Product[] | undefined {
        return products?.filter(p => p.name.includes(searchName));
    }
}
