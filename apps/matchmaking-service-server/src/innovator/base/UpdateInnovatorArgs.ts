/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InnovatorWhereUniqueInput } from "./InnovatorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InnovatorUpdateInput } from "./InnovatorUpdateInput";

@ArgsType()
class UpdateInnovatorArgs {
  @ApiProperty({
    required: true,
    type: () => InnovatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InnovatorWhereUniqueInput)
  @Field(() => InnovatorWhereUniqueInput, { nullable: false })
  where!: InnovatorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InnovatorUpdateInput,
  })
  @ValidateNested()
  @Type(() => InnovatorUpdateInput)
  @Field(() => InnovatorUpdateInput, { nullable: false })
  data!: InnovatorUpdateInput;
}

export { UpdateInnovatorArgs as UpdateInnovatorArgs };