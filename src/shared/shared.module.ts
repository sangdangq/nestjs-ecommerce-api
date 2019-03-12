import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './guard/auth.service';
import { JwtStrategy } from './guard/jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
        secretOrPrivateKey: 'mockSecretKey',
        signOptions: {
            expiresIn: 15,
        },
        }),
    ],
    controllers: [],
    providers: [
        AuthService,
        JwtStrategy,
    ],
})
export class SharedModule {}