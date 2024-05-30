import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Category} from './category.interface';

@Injectable({
    providedIn: 'root',
})
export class CategoriesApiService {
    constructor(private readonly http: HttpClient) {}

    loadCategories$(): Observable<Category[]> {
        return this.http.get<{data: Category[]}>(`/categories`).pipe(map(({data}) => data));
    }
}
