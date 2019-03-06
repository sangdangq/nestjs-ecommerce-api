import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        UserService,
    ...userProviders],
})
export class UserModule {}
