import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './shared/exception-filter/exception.filter';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    UserModule,
    SharedModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
})
export class AppModule {}
