import {catchError, map, Observable, of} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.interface';
import {ProductsDto} from './products.dto';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private readonly httpClient = inject(HttpClient);

    getProducts$(): Observable<Product[]> {
        return this.httpClient.get<ProductsDto>(`/products`).pipe(
            map(({data}) => data.items),
            catchError(() => of([])),
        );
        // return of<ProductsDto>({data: {items: productsMock}}).pipe(map(({data}) => data.items));
    }

    getProduct$(id: Product['_id']): Observable<Product | undefined> {
        return this.httpClient.get<{data: Product}>(`/products/${id}`).pipe(
            map(({data}) => data),
            catchError(() => of(undefined)),
        );
        // return of(productsMock.find(({_id}) => _id === id));
    }
}
