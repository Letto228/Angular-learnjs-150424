import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {ProductsFilterPipe} from '../../shared/product-filter/products-filter.pipe';
import {FilterByPropertyPipe} from '../../shared/filter-by-property.pipe';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, ProductsFilterPipe, FilterByPropertyPipe],
})
export class ProductsListModule {}
