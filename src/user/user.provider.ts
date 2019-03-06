import { User, ResetPassword, AccessToken } from './user.entity';

export const userProviders = [
  {
    provide: 'UserRepository',
    useValue: User,
  },
  {
    provide: 'ResetPasswordRepository',
    useValue: ResetPassword,
  },
  {
    provide: 'AccessTokenRepo',
    useValue: AccessToken,
  },
];