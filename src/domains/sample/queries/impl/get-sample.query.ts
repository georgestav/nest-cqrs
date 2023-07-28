import { IQuery } from "@nestjs/cqrs";

export class GetSampleQuery implements IQuery {
  constructor(private readonly id: string) {
    console.log(id);
  }
}
