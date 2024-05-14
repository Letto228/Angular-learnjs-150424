import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
    standalone: true,
})
export class ProductsFilterPipe implements PipeTransform {
    transform(value: Product[] | null, searchValue: string): Product[] | null {
        return value?.filter(prod => prod.name.includes(searchValue)) || null;
    }
}
