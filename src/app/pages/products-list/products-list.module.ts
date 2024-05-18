import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsFilterPipe} from 'src/app/shared/filter-by-property/filter-by-property.pipe';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, ProductsFilterPipe],
})
export class ProductsListModule {}
