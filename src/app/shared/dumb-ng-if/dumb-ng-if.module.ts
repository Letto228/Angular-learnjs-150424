import {NgModule} from '@angular/core';
import {DumbNgIfDirective} from './dumb-ng-if.directive';

@NgModule({
    declarations: [DumbNgIfDirective],
    exports: [DumbNgIfDirective],
})
export class DumbNgIfModule {}
