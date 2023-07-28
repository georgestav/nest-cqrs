import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { GetSampleQuery } from "../impl/get-sample.query";

@QueryHandler(GetSampleQuery)
export class GetSampleHandler implements IQueryHandler<GetSampleQuery> {
  private readonly logger = new Logger(GetSampleHandler.name);

  constructor() {
    // private readonly sampleQueries: SampleQueriesInterface, // @InjectSampleQueries()
  }

  async execute(query: GetSampleQuery): Promise<string> {
    // const exampleResponse = await this.sampleQueries.getSamples();
    this.logger.verbose("GetSampleHandler was called", { query });
    return "hello";
  }
}
