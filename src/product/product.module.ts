import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SharedModule } from './../shared/shared.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productProviders } from './product.provider';

@Module({
    imports: [
        DatabaseModule,
        SharedModule,
    ],
    controllers: [ProductController],
    providers: [
        ProductService,
    ...productProviders],
})
export class ProductModule {}
