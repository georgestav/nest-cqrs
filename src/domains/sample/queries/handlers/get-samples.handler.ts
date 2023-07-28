import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetSamplesQuery } from "../impl/get-samples.query";
import { Logger } from "@nestjs/common";

@QueryHandler(GetSamplesQuery)
export class GetSamplesHandler implements IQueryHandler<GetSamplesQuery> {
  private readonly logger = new Logger(GetSamplesHandler.name);

  constructor() {
    // @InjectSampleQueries()
    // private readonly sampleQueries: SampleQueriesInterface,
  }

  async execute(query: GetSamplesQuery): Promise<string[]> {
    // const exampleResponse = await this.sampleQueries.getSamples();
    this.logger.verbose("GetSamplesHandler was called", { query });
    return [];
  }
}
