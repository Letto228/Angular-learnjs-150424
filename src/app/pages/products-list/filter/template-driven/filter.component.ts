import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IProductsFilter} from '../products-filter.interface';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    onFormSend(form: unknown, valid: boolean | null) {
        if (!valid) {
            return;
        }

        // eslint-disable-next-line no-console
        console.log(form);
    }
}
