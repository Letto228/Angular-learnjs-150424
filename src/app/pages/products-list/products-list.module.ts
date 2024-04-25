import {NgModule} from '@angular/core';
import {CardModule} from './card/card.module';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CardModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
