import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    inject,
} from '@angular/core';
import {IProductsFilter} from '../products-filter.interface';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    counter = 555;

    constructor() {
        setTimeout(() => {
            this.counter = 90;

            this.changeDetectorRef.markForCheck();
        }, 3000);
    }

    onCounterChange(newCounter: number) {
        this.counter = newCounter;

        // eslint-disable-next-line no-console
        console.log(`Change`, newCounter);
    }

    onFormSend(form: unknown, valid: boolean | null) {
        if (!valid) {
            return;
        }

        // eslint-disable-next-line no-console
        console.log(form);
    }
}
