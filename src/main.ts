import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: [
      'https://zharatylyshtravel-server-production.up.railway.app',
      'http://localhost:3000',
      'http://localhost:5173',
    ], // Разрешенный источник запросов (замените на свой домен)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'patch', 'OPTIONS', 'HEAD'], // Разрешенные методы HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки запросов
  });

  const config = new DocumentBuilder()
    .setTitle('zharatylysh-server')
    .setDescription('The zharatylysh API description')
    .setVersion('1.0')
    .addTag('user')
    .addTag('tour')
    .addTag('review')
    .addTag('sight')
    .addTag('booked-tour')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
