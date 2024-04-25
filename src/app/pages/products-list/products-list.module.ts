import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
