import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, F extends keyof T>(
        items: T[] | undefined | null,
        propertyName: F,
        searchPropertyValue: T[F],
    ): T[] | undefined | null {
        if (items?.length) {
            if (typeof searchPropertyValue === 'string') {
                return items.filter(item =>
                    (item[propertyName] as string)
                        .toUpperCase()
                        .includes(searchPropertyValue.toUpperCase()),
                );
            }

            return items.filter(item => item[propertyName] === searchPropertyValue);
        }

        return items;
    }
}
