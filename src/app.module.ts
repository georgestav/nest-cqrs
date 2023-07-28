import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
} from "@nestjs/common";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { DomainsModule } from "./domains/domains.module";
import { UiModule } from "./ui/ui.module";

@Module({
  imports: [InfrastructureModule, DomainsModule, UiModule],
})
export class AppModule implements OnApplicationBootstrap, OnModuleDestroy {
  private readonly logger = new Logger(AppModule.name);
  onApplicationBootstrap(): any {
    this.logger.log(`Module loaded`);
  }

  onModuleDestroy(): any {
    this.logger.log(`Module was destroyed`);
  }
}
