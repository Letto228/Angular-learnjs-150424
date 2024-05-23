import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {DumbNgIfModule} from '../../shared/dumb-ng-if/dumb-ng-if.module';
import {ScrollWithLoadingModule} from '../../shared/scroll-with-loading/scroll-with-loading.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [
        CommonModule,
        CardModule,
        FilterByPropertyModule,
        DumbNgIfModule,
        ScrollWithLoadingModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        PaginationModule,
    ],
})
export class ProductsListModule {}
