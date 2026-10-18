import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve propiedades que no esten declaradas en los DTOs
      forbidNonWhitelisted: true, //Retorna bad request si hay propiedades en el objeto no requerida
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
