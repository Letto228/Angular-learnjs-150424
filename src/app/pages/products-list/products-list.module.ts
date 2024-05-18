import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterElementsModule} from 'src/app/shared/filter-elements/filter-elements.module';
import {FilterByPropertyModule} from 'src/app/shared/filer-by-property/filter-by-property.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, FilterElementsModule, FilterByPropertyModule],
})
export class ProductsListModule {}
