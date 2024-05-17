import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {DumbNgIfModule} from '../../shared/dumb-ng-if/dumb-ng-if.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardModule, FilterByPropertyModule, DumbNgIfModule],
})
export class ProductsListModule {}
