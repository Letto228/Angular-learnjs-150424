import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, Key extends keyof T>(data: T[] | null, key: Key, searchValue: unknown) {
        return data?.filter(p => p[key] === searchValue);
    }
}
