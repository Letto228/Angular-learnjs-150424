import {NgModule} from '@angular/core';
import {ProductsFilterPipe} from './filter-elements.pipe';

@NgModule({
    declarations: [ProductsFilterPipe],
    exports: [ProductsFilterPipe],
})
export class FilterElementsModule {}
