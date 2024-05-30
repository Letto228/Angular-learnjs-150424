import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Category} from '../../../shared/categories/category.interface';

@Component({
    selector: 'app-categories-select',
    templateUrl: './categories-select.component.html',
    styleUrls: ['./categories-select.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectComponent {
    @Input() categories!: Category[] | null;
}
