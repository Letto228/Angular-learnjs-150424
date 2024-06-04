import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IProductsFilter} from '../products-filter.interface';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    readonly filterForm = new FormGroup({
        search: new FormControl(''),
        brands: new FormArray<FormControl<boolean | null>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(99999999),
        }),
    });

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    private updateBrandsControl() {
        const brandsForms = this.brands?.length
            ? this.brands.map(() => new FormControl(false))
            : [];

        const formArray = new FormArray(brandsForms);

        this.filterForm.setControl('brands', formArray);
    }
}
