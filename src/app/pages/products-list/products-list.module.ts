import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {ProductsFilterModule} from '../../shared/products-filter/products-filter.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, ProductsFilterModule],
})
export class ProductsListModule {}
