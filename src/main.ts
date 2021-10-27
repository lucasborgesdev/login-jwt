import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { winstonConfig } from 'configs/winstom.config';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';



async function bootstrap() {
  
  const logger =  WinstonModule.createLogger(winstonConfig)
  const app = await NestFactory.create(AppModule, {logger});
  const config = new DocumentBuilder()
    .setTitle('Elibras exemplos')
    .setDescription('Elibras API description')
    .setVersion('1.0')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  

  await app.listen(3000);
}
bootstrap();
