import { AllExceptionsFilter } from './shared/exception-filter/exception.filter';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './shared/pipe/generic-pipe';
import 'reflect-metadata';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  const opttions = new DocumentBuilder()
    .setTitle('Shopping online')
    .setDescription('The shopping online API descripttion')
    .setVersion('1.0')
    .addTag('Shopping')
    .setSchemes('https')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, opttions);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3334);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
