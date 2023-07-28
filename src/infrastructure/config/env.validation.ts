import * as Joi from "joi";

export enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
  Provision = "provision",
}

export enum Protocols {
  HTTP = "http",
  HTTPS = "https",
}

export const EnvValidation = Joi.object({
  NODE_ENV: Joi.string()
    .valid(
      Environment.Development,
      Environment.Production,
      Environment.Test,
      Environment.Provision,
    )
    .default(Environment.Production),
  APP_PORT: Joi.number().port().default(3000),
  APP_URL: Joi.string().hostname().required(),
  APP_PROTOCOL: Joi.string()
    .valid(Protocols.HTTP, Protocols.HTTPS)
    .default(Protocols.HTTPS),
  CONTAINER_PORT: Joi.number().port().default(3000),
});
