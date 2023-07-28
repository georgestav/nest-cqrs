import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
} from "@nestjs/common";
import { SampleModule } from "./sample/sample.module";

@Module({
  imports: [SampleModule],
})
export class DomainsModule implements OnApplicationBootstrap, OnModuleDestroy {
  private readonly logger = new Logger(DomainsModule.name);

  onApplicationBootstrap(): any {
    this.logger.log(`Domain module is loaded`);
  }

  onModuleDestroy(): any {
    this.logger.log(`Domain module is destroyed`);
  }
}
