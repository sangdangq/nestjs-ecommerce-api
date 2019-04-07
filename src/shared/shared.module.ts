import { Module, HttpModule } from '@nestjs/common';
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
        JwtModule.register({
            secretOrPrivateKey: 'K4ad24@$!Dpnh80-14nadhKUoqe&&BJMSSSA',
            signOptions: { expiresIn: '2h' },
        }),
    ],
})
export class SharedModule {}