import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { writeFileSync } from "fs";

export function setupSwagger(app: INestApplication): void {
  const logger = new Logger("Swagger");
  const configService = app.get(ConfigService);
  const appProtocol = configService.get("APP_PROTOCOL");
  const appUrl = configService.get("APP_URL");
  const appPort =
    configService.get("CONTAINER_PORT") ?? configService.get("APP_PORT");
  const swaggerEndpoint = "/api/v1/swagger-ui";

  const serverAddress = `${appProtocol}://${appUrl}:${appPort}`;

  const config = new DocumentBuilder()
    .setTitle(configService.get<string>("npm_package_name"))
    .setDescription("Auth service api")
    .setVersion(configService.get<string>("npm_package_version"))
    .addServer(serverAddress)
    .addBearerAuth()
    .build();

  logger.log("Swagger Docs available: " + serverAddress + swaggerEndpoint);
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(swaggerEndpoint, app, document);

  // Write Swagger JSON to file.
  writeFileSync("./swagger.json", JSON.stringify(document, null, 2));
}
