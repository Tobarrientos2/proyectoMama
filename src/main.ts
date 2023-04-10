import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function inicio() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  console.log(`Server started and listening at http://localhost:3000/`);
}
inicio();
