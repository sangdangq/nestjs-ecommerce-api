import { Module } from '@nestjs/common';
import { SharedModule } from './../shared/shared.module';
import { CategorySevice } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.provider';

@Module({
    imports: [
        SharedModule,
    ],
    controllers: [CategoryController],
    providers: [
        CategorySevice,
        ...categoryProviders
    ],
})
export class CategoryModule {}