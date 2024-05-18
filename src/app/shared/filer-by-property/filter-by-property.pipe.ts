import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T>(items: T[] | null, propertyName: keyof T, searchPropertyValue: unknown): T[] {
        if (!items || !propertyName || !searchPropertyValue) {
            return [];
        }

        return items.filter(item => {
            if (Object.prototype.hasOwnProperty.call(item, propertyName)) {
                const propertyValue = item[propertyName];

                if (typeof propertyValue === typeof searchPropertyValue) {
                    return propertyValue === searchPropertyValue;
                }
            }

            return false;
        });
    }
}
