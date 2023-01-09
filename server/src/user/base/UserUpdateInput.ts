/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  IsOptional,
  IsJSON,
  IsInt,
  IsDate,
  IsNumber,
  ValidateNested,
  IsEnum,
  IsBoolean,
} from "class-validator";

import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";
import { OrganizationUpdateManyWithoutUsersInput } from "./OrganizationUpdateManyWithoutUsersInput";
import { EnumUserInterests } from "./EnumUserInterests";
import { EnumUserPriority } from "./EnumUserPriority";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthDate?: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score?: number;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  manager?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  employees?: UserUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrganizationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  organizations?: OrganizationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserInterests,
    isArray: true,
  })
  @IsEnum(EnumUserInterests, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumUserInterests], {
    nullable: true,
  })
  interests?: Array<"programming" | "design">;

  @ApiProperty({
    required: false,
    enum: EnumUserPriority,
  })
  @IsEnum(EnumUserPriority)
  @IsOptional()
  @Field(() => EnumUserPriority, {
    nullable: true,
  })
  priority?: "high" | "medium" | "low";

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isCurious?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  extendedProperties?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ProfileWhereUniqueInput, {
    nullable: true,
  })
  profile?: ProfileWhereUniqueInput | null;
}

export { UserUpdateInput as UserUpdateInput };
