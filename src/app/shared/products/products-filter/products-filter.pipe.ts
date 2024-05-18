import {Pipe, PipeTransform} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: Product[] | null, searchName: string): Product[] | null {
        return products?.filter((product: Product) => product.name.includes(searchName)) || null;
    }
}
