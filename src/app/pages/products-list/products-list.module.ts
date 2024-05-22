import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductFilterModule} from 'src/app/shared/product-filter/product-filter.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, ProductFilterModule],
})
export class ProductsListModule {}
