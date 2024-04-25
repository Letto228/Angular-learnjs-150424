import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {ProductCardComponent} from './card/product-card/product-card.component';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [ProductCardComponent],
})
export class ProductsListModule {}
