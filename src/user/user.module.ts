import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module, HttpModule } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.provider';

@Module({
    imports: [
        DatabaseModule,
        HttpModule,
    ],
    controllers: [UserController],
    providers: [UserService,
        ...userProviders],
    exports: [
        UserService,
    ],
})
export class UserModule {}
