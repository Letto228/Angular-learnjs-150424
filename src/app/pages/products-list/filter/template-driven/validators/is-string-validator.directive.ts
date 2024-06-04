import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appIsStringValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringValidatorDirective,
            multi: true,
        },
    ],
})
export class IsStringValidatorDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const hasError = !!Number(control.value);

        return hasError ? {isStringValidator: `Is value: ${control.value} - number`} : null;
    }
}
