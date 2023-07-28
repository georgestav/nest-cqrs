import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
} from "@nestjs/common";
import { SampleController } from "./sample/sample.controller";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
  imports: [CqrsModule],
  controllers: [SampleController],
})
export class HttpApiModule implements OnApplicationBootstrap, OnModuleDestroy {
  private readonly logger = new Logger(HttpApiModule.name);

  onApplicationBootstrap(): any {
    this.logger.log(`Module loaded`);
  }

  onModuleDestroy(): any {
    this.logger.log(`Module was destroyed`);
  }
}
