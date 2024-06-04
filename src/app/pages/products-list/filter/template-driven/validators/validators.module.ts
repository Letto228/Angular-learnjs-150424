import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsStringValidatorDirective} from './is-string-validator.directive';
import {IsStringAsynValidatorDirective} from './is-string-asyn-validator.directive';

@NgModule({
    declarations: [IsStringValidatorDirective, IsStringAsynValidatorDirective],
    imports: [CommonModule],
    exports: [IsStringValidatorDirective, IsStringAsynValidatorDirective],
})
export class ValidatorsModule {}
