import { SampleQueriesInterface } from "../../domains/sample/queries/interfaces/sample-queries.interface";
import { Injectable } from "@nestjs/common";

/**
 * The purpose of this service is to gather all queries related to a Sample entity
 */
@Injectable()
export class SamplesQueriesService implements SampleQueriesInterface {
  constructor() {
    // inject any Sample entity repositories in the constructor
    // @InjectRepository(Sample) // private readonly userRepository: Repository<User>,
  }

  getSample(): Promise<any> {
    return Promise.resolve("getSample");
  }

  getSamples(): Promise<string> {
    return Promise.resolve("getSamples");
  }
}
