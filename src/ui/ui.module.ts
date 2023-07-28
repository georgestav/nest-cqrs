import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
} from "@nestjs/common";
import { HttpApiModule } from "./http/api/http-api.module";

@Module({
  imports: [HttpApiModule],
})
export class UiModule implements OnApplicationBootstrap, OnModuleDestroy {
  private readonly logger = new Logger(UiModule.name);

  onApplicationBootstrap(): any {
    this.logger.log(`Module loaded`);
  }

  onModuleDestroy(): any {
    this.logger.log(`Module was destroyed`);
  }
}
