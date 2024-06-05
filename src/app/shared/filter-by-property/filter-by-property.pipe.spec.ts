import {productsMock} from '../products/products.mock';
import {FilterByPropertyPipe} from './filter-by-property.pipe';

describe('FilterByPropertyPipe', () => {
    let pipe: FilterByPropertyPipe;

    beforeEach(() => {
        pipe = new FilterByPropertyPipe();
    });

    it('Фильтрация по имени', () => {
        const actualValue = pipe.transform(productsMock, 'name', productsMock[0].name);

        expect(actualValue).toEqual([productsMock[0]]);
    });

    it('Фильтрация по id', () => {
        const actualValue = pipe.transform(productsMock, '_id', productsMock[2]._id);

        expect(actualValue).toEqual([productsMock[2]]);
    });

    it('Не нахождение значения', () => {
        const actualValue = pipe.transform(productsMock, '_id', 'not-found');

        expect(actualValue).toEqual([]);
    });
});
