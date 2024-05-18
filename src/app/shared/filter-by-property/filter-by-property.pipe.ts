import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
    standalone: true,
})
export class ProductsFilterPipe implements PipeTransform {
    transform<T>(
        values: T[] | null,
        propertyName: string,
        searchPropertyValue: unknown,
    ): T[] | null {
        if (!values && Array.isArray(values)) {
            return null;
        }

        if (values?.length === 0) {
            return [];
        }

        if (typeof values?.[0] !== 'object') {
            return null;
        }

        if (values?.[0] === null) {
            return null;
        }

        if (!(propertyName in values[0])) {
            return null;
        }

        if (
            typeof searchPropertyValue !==
            typeof values[0][propertyName as keyof (typeof values)[0]]
        ) {
            return null;
        }

        if (typeof values?.[0] === 'string') {
            return values.filter(value => {
                if (value !== null && typeof value === 'object') {
                    return (value[propertyName as keyof typeof value] as string).includes(
                        searchPropertyValue as string,
                    );
                }

                return false;
            });
        }

        return values.filter(value => {
            if (value !== null && typeof value === 'object') {
                return (
                    (value[propertyName as keyof typeof value] as string) === searchPropertyValue
                );
            }

            return false;
        });
    }
}
