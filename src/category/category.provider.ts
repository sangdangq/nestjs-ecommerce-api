import { Category } from './category.entity';

export const categoryProviders = [
    {
        provide: 'CategoryRepo',
        useValue: Category
    },
];