import { User, AccessToken } from './user.entity';

export const userProviders = [
  {
    provide: 'UserRepository',
    useValue: User,
  },
  {
    provide: 'AccessTokenRepo',
    useValue: AccessToken,
  },
];