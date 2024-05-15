import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterByPropertyModule} from 'src/app/shared/search/filter-by-property.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, FilterByPropertyModule],
})
export class ProductsListModule {}
