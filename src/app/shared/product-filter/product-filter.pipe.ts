import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[] | null, name: string): Product[] | null {
        if (!products) {
            return null;
        }

        if (!name) {
            return products;
        }

        return products.filter(product => product.name.includes(name));

        // для себя
        // let filteredProducts: Product[] = [];
        // for (let i = 0; i <= products!.length - 1; i++) {
        //     if (products[i].name.includes(name)) {
        //         filteredProducts.push(products[i]);
        //     }
        // }
        // return filteredProducts;
        // if (!products) {
        //     return null;
        // }

        // return products.find(product => product.name.includes(name)) || null;

        // for (let product of products) {
        //     if (product.name.includes(name)) {
        //         return product;
        //     }
        // }
        // return null;
    }
}
