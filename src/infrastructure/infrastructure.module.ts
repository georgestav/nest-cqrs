import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleDestroy,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EnvValidation } from "./config/env.validation";
import { SAMPLE_QUERIES_INTERFACE } from "../domains/sample/queries/interfaces/sample-queries.interface";
import { SamplesQueriesService } from "./queries/samples-queries.service";
import { SAMPLE_PERSISTANCE_INTERFACE } from "../domains/sample/persistance/interfaces/sample-persistance.interface";
import { SamplesPersistanceService } from "./persistance/samples-persistance.service";

export const interfaceProviders = [
  {
    provide: SAMPLE_QUERIES_INTERFACE,
    useClass: SamplesQueriesService,
  },
  {
    provide: SAMPLE_PERSISTANCE_INTERFACE,
    useClass: SamplesPersistanceService,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: EnvValidation,
      cache: true,
    }),
  ],
  providers: [...interfaceProviders],
  exports: [ConfigModule, ...interfaceProviders],
})
export class InfrastructureModule
  implements OnApplicationBootstrap, OnModuleDestroy
{
  private readonly logger = new Logger(InfrastructureModule.name);

  onApplicationBootstrap(): any {
    this.logger.log(`Module loaded`);
  }

  onModuleDestroy(): any {
    this.logger.log(`Module was destroyed`);
  }
}
