import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 80;
  const app = await NestFactory.create(AppModule);

  console.log(process.env.PORT);
  console.log("Before start");

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start();
