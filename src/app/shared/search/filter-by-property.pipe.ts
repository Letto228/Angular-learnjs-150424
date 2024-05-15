import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, F>(array: T[] | null, propertyName: string, searchPropertyValue: F): T[] {
        const dynamicKey = propertyName as keyof T;

        if (
            array &&
            array.length > 0 &&
            dynamicKey &&
            typeof array[0][dynamicKey] === typeof searchPropertyValue
        ) {
            if (typeof searchPropertyValue === 'string') {
                return array.filter(i => (i[dynamicKey] as string).includes(searchPropertyValue));
            }

            return array.filter(i => i[dynamicKey] === searchPropertyValue);
        }

        return [];
    }
}
