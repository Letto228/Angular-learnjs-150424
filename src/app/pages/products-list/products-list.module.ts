import {NgModule} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CardModule, NgForOf],
})
export class ProductsListModule {}
