import {map, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Product} from './product.interface';
import {ProductsDto} from './products.dto';
import {productsMock} from './products.mock';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    getProducts$(): Observable<Product[]> {
        return of<ProductsDto>({data: {items: productsMock}}).pipe(map(({data}) => data.items));
    }
}
