import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { GetSamplesQuery } from "../../../../domains/sample/queries/impl/get-samples.query";
import { GetSampleQuery } from "../../../../domains/sample/queries/impl/get-sample.query";
import { CreateNewSampleCommand } from "../../../../domains/sample/commands/impl/create-new-sample.command";
import { CreateSampleDto } from "../../../../shared/create-sample.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("samples")
@Controller({ path: "samples", version: "1" })
export class SampleController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {
    //
  }

  @Get("/all")
  public async getSamples(): Promise<string[]> {
    return await this.queryBus.execute(new GetSamplesQuery());
  }

  @Get("/sample/:id")
  public async getSample(@Query("id") id: string): Promise<string> {
    return await this.queryBus.execute(new GetSampleQuery(id));
  }

  @ApiOperation({ summary: "Create a new sample" })
  @ApiResponse({
    status: 201,
    description: "The sample has been successfully created.",
  })
  @ApiResponse({ status: 400, description: "Bad request." })
  @ApiBody({ type: CreateSampleDto, description: "Sample data" })
  @Post("/create")
  public async createSample(
    @Body() createSampleDto: CreateSampleDto,
  ): Promise<string> {
    return await this.commandBus.execute(
      new CreateNewSampleCommand(createSampleDto.text),
    );
  }
}
