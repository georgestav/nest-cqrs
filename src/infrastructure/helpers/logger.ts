import { LogLevel } from "@nestjs/common/services/logger.service";

/**
 * Will return the log level based on isProduction Boolean
 *
 * @param isProduction
 */
export function getLogLevels(isProduction: boolean): LogLevel[] {
  if (isProduction) {
    return ["log", "warn", "error"];
  }
  return ["error", "warn", "log", "verbose", "debug"];
}
