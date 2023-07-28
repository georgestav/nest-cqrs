import { IEvent } from "@nestjs/cqrs";

export class SampleWasCreatedEvent implements IEvent {
  constructor(public readonly context: string) {}
}
