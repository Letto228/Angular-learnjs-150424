import {SubCategory} from './sub-category.interface';

export interface Category {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _id: string;
    name: string;
    subCategories: SubCategory[];
}
