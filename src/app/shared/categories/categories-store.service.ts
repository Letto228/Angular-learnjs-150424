import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoriesApiService} from './categories-api.service';
import {Category} from './category.interface';

@Injectable({
    providedIn: 'root',
})
export class CategoriesStoreService {
    private readonly categoriesStore$ = new BehaviorSubject<Category[] | null>(null);

    constructor(private readonly categoriesApiService: CategoriesApiService) {}

    get categories$(): Observable<Category[] | null> {
        return this.categoriesStore$.asObservable();
    }

    loadCategories() {
        this.categoriesApiService.loadCategories$().subscribe(categories => {
            this.categoriesStore$.next(categories);
        });
    }
}
