import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module, HttpModule } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.provider';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'K4ad24@$!Dpnh80-14nadhKUoqe&&BJMSSSA',
      signOptions: { expiresIn: '1h' }
    }),
  ],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService]
})
export class UserModule {}
