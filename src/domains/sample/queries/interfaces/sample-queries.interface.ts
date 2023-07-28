import { Inject } from "@nestjs/common";

export const SAMPLE_QUERIES_INTERFACE = "SampleQueriesInterface";

export const InjectSampleQueries = () => Inject(SAMPLE_QUERIES_INTERFACE);

export interface SampleQueriesInterface {
  getSamples(): Promise<string>;
  getSample(): Promise<string>;
}
