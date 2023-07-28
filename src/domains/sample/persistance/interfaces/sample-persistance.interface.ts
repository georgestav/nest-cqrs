import { Inject } from "@nestjs/common";

export const SAMPLE_PERSISTANCE_INTERFACE = "SamplePersistanceInterface";

export const InjectSamplePersistance = () =>
  Inject(SAMPLE_PERSISTANCE_INTERFACE);

export interface SamplePersistanceInterface {
  createSample(text: string): Promise<string>;
  updateSample(): Promise<string>;
  setSampleStatus(): Promise<string>;
}
