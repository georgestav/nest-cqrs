import { CompositeSpecification } from "ts-specification";

export class CommandIsNotEmptySpecification<
  T,
> extends CompositeSpecification<T> {
  isSatisfiedBy(candidate: T): boolean {
    // Implement your condition here to check if the variable is not empty.
    // The return value should be true if the condition is met, otherwise false.
    // You can use the logic from the previous example to check for non-empty arrays and strings.

    // For a non-empty array or string:
    if (Array.isArray(candidate) || typeof candidate === "string") {
      return candidate.length > 0;
    }

    // For any other type, you can define your own condition.
    // For example, if candidate is an object, you might check its properties.

    return false; // If the candidate is not of a known non-empty type, consider it empty.
  }
}
