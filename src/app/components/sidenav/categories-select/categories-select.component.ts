import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {Category} from '../../../shared/categories/category.interface';
import {SubCategory} from 'src/app/shared/categories/sub-category.interface';
import {ProductsStoreService} from 'src/app/shared/products/products-store.service';

@Component({
    selector: 'app-categories-select',
    templateUrl: './categories-select.component.html',
    styleUrls: ['./categories-select.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectComponent {
    private readonly productsStoreService = inject(ProductsStoreService);

    @Input() categories!: Category[] | null;

    getProductsByCategory(subCategory: SubCategory) {
        this.productsStoreService.loadProducts(subCategory._id);
    }
}
