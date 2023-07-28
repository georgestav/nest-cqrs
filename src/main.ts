import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getLogLevels } from "./infrastructure/helpers/logger";
import {
  Logger,
  RequestMethod,
  ValidationPipe,
  VersioningType,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { setupSwagger } from "./infrastructure/swagger/swagger";

async function bootstrap() {
  const environment = process.env.NODE_ENV || "production";
  const envIsProd: boolean = environment === "production";

  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: getLogLevels(envIsProd),
  });

  app.enableVersioning({ type: VersioningType.URI });
  app.setGlobalPrefix("api", {
    exclude: [{ path: "health", method: RequestMethod.GET }],
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>("APP_PORT");
  const logger = new Logger(configService.get("npm_package_name"));

  // Use global pipes for validation.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Call the setupSwagger function
  setupSwagger(app);

  await app.listen(3000);
  logger.log(`Started at port: ${port}`);
  logger.log(`Environment: ${environment}`);
}

bootstrap().then(() => {
  //
});
