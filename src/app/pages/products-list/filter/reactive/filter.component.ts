import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    inject,
} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import {Observable, map, timer} from 'rxjs';
import {IProductsFilter} from '../products-filter.interface';
import {isStringValidator} from './is-string-validator';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    private readonly request$ = timer(3000);
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    readonly control = new FormControl(0);

    readonly filterForm = new FormGroup({
        search: new FormControl('', {
            validators: [Validators.minLength(3), Validators.required],
            asyncValidators: [this.isSctringAsyncValidator.bind(this)],
        }),
        brands: new FormArray<FormControl<boolean | null>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(99999999),
        }),
    });

    readonly errors$ = this.filterForm
        .get('search')
        ?.statusChanges.pipe(map(() => this.filterForm.get('search')?.errors));

    constructor() {
        this.filterForm.valueChanges.subscribe(value => {
            // eslint-disable-next-line no-console
            console.log('Subscribe', value);
        });

        // this.control.valueChanges.subscribe(value => {
        //     console.log('Subscribe', value);
        // });

        // setTimeout(() => {
        //     this.control.setValue(99999);
        // }, 2000);
    }

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

    // private readonly isSctringAsyncValidator: AsyncValidatorFn
    private isSctringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        // eslint-disable-next-line no-console
        console.log('isSctringAsyncValidator');

        return this.request$.pipe(
            map(() => isStringValidator(control)),
            // tap(error => {
            //     console.log('Test', error);
            //     this.changeDetectorRef.markForCheck();
            // }),
        );
    }
}
