import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
    standalone: true,
})
export class ProductsFilterPipe implements PipeTransform {
    transform<T, K extends keyof T>(
        values: T[] | null,
        propertyName: K,
        searchPropertyValue: T[K],
    ): T[] | null | undefined {
        if (!values?.length) {
            return values;
        }

        if (typeof searchPropertyValue === 'string') {
            return values.filter(value => {
                const propertyValueLowerCase = (value[propertyName] as string).toLowerCase();
                const searchValueLowerCase = (searchPropertyValue as string).toLowerCase();

                return propertyValueLowerCase.includes(searchValueLowerCase);
            });
        }

        return values.filter(value => {
            return value[propertyName] === searchPropertyValue;
        });
    }
}
