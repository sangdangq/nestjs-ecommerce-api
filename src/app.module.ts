import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './shared/exception-filter/exception.filter';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { UploadFileModule } from './upload-file/upload-file.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    UserModule,
    SharedModule,
    ProductModule,
    CategoryModule,
    CommentModule,
    MulterModule.register({
      dest: 'uploads',
    }),
    UploadFileModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService
  ]
})
export class AppModule {}
