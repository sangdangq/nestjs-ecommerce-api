import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SharedModule } from './../shared/shared.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productProviders } from './product.provider';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        DatabaseModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [ProductController],
    providers: [
        ProductService,
    ...productProviders],
})
export class ProductModule {}
