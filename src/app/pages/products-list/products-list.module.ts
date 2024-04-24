import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CommonModule, CardComponent],
})
export class ProductsListModule {}
