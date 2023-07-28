import { Injectable } from "@nestjs/common";
import { SamplePersistanceInterface } from "../../domains/sample/persistance/interfaces/sample-persistance.interface";

/**
 * The purpose of this service is to gather all persistance operations related to a Sample entity
 */
@Injectable()
export class SamplesPersistanceService implements SamplePersistanceInterface {
  constructor() {
    // inject any Sample entity repositories in the constructor
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
  }

  createSample(text: string): Promise<string> {
    return Promise.resolve(text);
  }

  setSampleStatus(): Promise<string> {
    return Promise.resolve("setSampleStatus");
  }

  updateSample(): Promise<string> {
    return Promise.resolve("updateSample");
  }
}
