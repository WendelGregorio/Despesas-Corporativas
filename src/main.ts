import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação Api Paytrack')
    .setDescription('Api para cadastrar, deletar, editar e buscar despesas')
    .setVersion('1.0')
    .addTag('Colaboradores')
    .addTag('Despesas')
    .addTag('Tipos de Despesas')
    .addTag('Auth')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  app.enableCors()
  app.use(helmet())
  await app.listen(3000);
}
bootstrap();
