import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PicPay Simplificado')
    .setDescription('API para transferências entre usuários do sistema PicPay')
    .setVersion('1.0')
    .addTag('users')
    .addTag('transactions')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // acessível em http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
