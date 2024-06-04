import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
            multi: true,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    @Input() step = 1;

    counter = 0;
    isDisabled = false;

    onChange: (actualCounter: number) => void = () => {
        throw new Error('OnChange функция не установлена');
    };

    onTouched: () => void = () => {
        throw new Error('onTouched функция не установлена');
    };

    writeValue(newCounter: number): void {
        this.counter = newCounter;

        // eslint-disable-next-line no-console
        console.log('writeValue', newCounter);

        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(onChange: (actualCounter: number) => void): void {
        this.onChange = onChange;

        // eslint-disable-next-line no-console
        console.log(onChange);
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;

        this.changeDetectorRef.markForCheck();
    }

    back() {
        this.counter -= this.step;

        // eslint-disable-next-line no-console
        console.log('onChange - back', this.counter);
        this.onChange(this.counter);
        this.onTouched();
    }

    next() {
        this.counter += this.step;

        // eslint-disable-next-line no-console
        console.log('onChange - next', this.counter);
        this.onChange(this.counter);
        this.onTouched();
    }
}
