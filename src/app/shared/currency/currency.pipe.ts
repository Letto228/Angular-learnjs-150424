import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currency',
    pure: true,
})
export class CurrencyPipe implements PipeTransform {
    transform(price: number | undefined, symbol = '$', _test = ''): string {
        // eslint-disable-next-line no-console
        console.log('Calculated pipe', price);

        return `${price || 0} ${symbol}`;
    }
}
