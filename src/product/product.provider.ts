import { ProductEnt } from './product.entity';

export const productProviders = [
  {
    provide: 'ProductRepository',
    useValue: ProductEnt,
  },
];