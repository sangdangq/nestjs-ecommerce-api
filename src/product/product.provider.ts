import { Product } from './product.entity';

export const productProviders = [
  {
    provide: 'ProductRepo',
    useValue: Product
  },
];
