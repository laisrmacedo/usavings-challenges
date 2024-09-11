import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://usavings-challenges.vercel.app', 'http://localhost:4200', 'http://localhost:4000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
    // origin: '*'
  });
  await app.listen(3000);
}
bootstrap();
