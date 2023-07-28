import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
} from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { QueryHandlersIndex } from "./queries/handlers/query-handlers.index";
import { InfrastructureModule } from "../../infrastructure/infrastructure.module";
import { CommandHandlersIndex } from "./commands/handler/command-handlers.index";
import { EventHandlersIndex } from "./events/handler/event-handlers.index";

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [
    ...CommandHandlersIndex,
    ...QueryHandlersIndex,
    ...EventHandlersIndex,
  ],
})
export class SampleModule implements OnApplicationBootstrap, OnModuleDestroy {
  private readonly logger = new Logger(SampleModule.name);

  onApplicationBootstrap(): any {
    this.logger.log(`Module loaded`);
  }

  onModuleDestroy(): any {
    this.logger.log(`Module was destroyed`);
  }
}
