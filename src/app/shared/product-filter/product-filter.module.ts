import {NgModule} from '@angular/core';
import {ProductFilterPipe} from './product-filter.pipe';

@NgModule({
    declarations: [ProductFilterPipe],
    exports: [ProductFilterPipe],
})
export class ProductFilterModule {}
