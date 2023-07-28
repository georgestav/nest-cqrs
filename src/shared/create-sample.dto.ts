import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSampleDto {
  @ApiProperty({
    example: "Sample text",
    description: "The text for the sample",
  })
  @IsNotEmpty()
  @IsString()
  text: string;
}
