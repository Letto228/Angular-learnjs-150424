import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
    standalone: true,
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, K extends keyof T>(
        value: T[] | null,
        propertyName: K,
        searchPropertyValue: T[K],
    ): T[] | null {
        return (
            value?.filter(item => {
                const propValue = item[propertyName];

                return typeof propValue === 'string'
                    ? propValue?.includes(searchPropertyValue as string)
                    : propValue === searchPropertyValue;
            }) || null
        );
    }
}
