import { User } from './user.entity';

export const userProviders = [
  {
    provide: 'UserRepo',
    useValue: User,
  },
];