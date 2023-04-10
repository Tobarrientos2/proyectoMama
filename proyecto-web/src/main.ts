import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';  
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());

  app.useStaticAssets(join(dir__name, '..', 'public')); 
  app.setBaseViewsDir(join(dir__name, '..', 'views')); 
  app.setViewEngine('ejs'); 

  await app.listen(3000);
}
bootstrap();
