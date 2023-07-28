import { ICommand } from "@nestjs/cqrs";

export class CreateNewSampleCommand implements ICommand {
  constructor(readonly text: string) {}
}
