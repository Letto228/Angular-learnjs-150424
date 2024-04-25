import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {CardComponent} from './card/card.component';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CardComponent],
})
export class ProductsListModule {}
