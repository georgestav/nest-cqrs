import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateNewSampleCommand } from "../impl/create-new-sample.command";
import { CommandIsNotEmptySpecification } from "../../specifications/command-is-not-empty.specification";
import { SampleWasCreatedEvent } from "../../events/impl/sample-was-created.event";
import {
  InjectSampleQueries,
  SampleQueriesInterface,
} from "../../queries/interfaces/sample-queries.interface";
import { Logger } from "@nestjs/common";
import {
  InjectSamplePersistance,
  SamplePersistanceInterface,
} from "../../persistance/interfaces/sample-persistance.interface";

@CommandHandler(CreateNewSampleCommand)
export class CreateNewSampleHandler
  implements ICommandHandler<CreateNewSampleCommand>
{
  private readonly logger = new Logger(CreateNewSampleHandler.name);
  private readonly commandIsNotEmptySpecification =
    new CommandIsNotEmptySpecification();
  constructor(
    private readonly eventBus: EventBus,
    // Call the queries
    @InjectSampleQueries()
    private readonly sampleQueries: SampleQueriesInterface,
    // call the persistance
    @InjectSamplePersistance()
    private readonly samplePersistance: SamplePersistanceInterface,
  ) {}

  async execute(command: CreateNewSampleCommand): Promise<any> {
    if (this.commandIsNotEmptySpecification.isSatisfiedBy(command.text)) {
      const existingSamples = await this.sampleQueries.getSamples();
      if (existingSamples) {
        this.logger.debug("existingSamples queried", { existingSamples });
        // do something
      }

      const sampleSaved = await this.samplePersistance.createSample(
        command.text,
      );

      this.eventBus.publish(new SampleWasCreatedEvent(sampleSaved));
      return sampleSaved;
    }
  }
}
