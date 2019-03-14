import { Module, HttpModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './guard/auth.service';
import { JwtStrategy } from './guard/jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
    providers: [
        AuthService,
        JwtStrategy,
    ],
    exports: [AuthService],
    imports: [
        UserModule,
    ],
})
export class SharedModule {}