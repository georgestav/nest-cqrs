import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { SampleWasCreatedEvent } from "../impl/sample-was-created.event";

@EventsHandler(SampleWasCreatedEvent)
export class SampleWasCreatedHandler
  implements IEventHandler<SampleWasCreatedEvent>
{
  private readonly logger = new Logger(SampleWasCreatedHandler.name);
  handle(event: SampleWasCreatedEvent): any {
    this.logger.log("New Sample was created", { message: event });
  }
}
