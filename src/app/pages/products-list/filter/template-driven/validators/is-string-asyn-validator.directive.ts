import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    ValidationErrors,
} from '@angular/forms';
import {Observable, map, tap, timer} from 'rxjs';

@Directive({
    selector: '[appIsStringAsynValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringAsynValidatorDirective,
            multi: true,
        },
    ],
})
export class IsStringAsynValidatorDirective implements AsyncValidator {
    private readonly request$ = timer(3000);
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
        return this.request$.pipe(
            map(() => {
                const hasError = !!Number(control.value);

                return hasError ? {isStringValidator: `Is value: ${control.value} - number`} : null;
            }),
            tap(() => {
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
