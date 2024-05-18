import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsFilterModule} from 'src/app/shared/products/products-filter/products-filter.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, ProductsFilterModule],
})
export class ProductsListModule {}
