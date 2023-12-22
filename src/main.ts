import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedInterceptor } from './commom/error/intercepitores/generics-errors.interceptors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Simple blog')
  .setDescription('The simple blog API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }))

  // app.useGlobalFilters(new HttpExceptionFilter())

  app.useGlobalInterceptors(new UnauthorizedInterceptor())
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
