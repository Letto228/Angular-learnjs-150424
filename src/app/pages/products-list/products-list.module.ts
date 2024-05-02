import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CardModule, BrowserModule],
})
export class ProductsListModule {}
