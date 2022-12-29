/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateManyArgs } from "./CreateManyArgs";
import { UpdateManyArgs } from "./UpdateManyArgs";
import { DeleteManyArgs } from "./DeleteManyArgs";
import { ManyFindManyArgs } from "./ManyFindManyArgs";
import { ManyFindUniqueArgs } from "./ManyFindUniqueArgs";
import { Many } from "./Many";
import { OneFindManyArgs } from "../../one/base/OneFindManyArgs";
import { One } from "../../one/base/One";
import { ManyService } from "../many.service";

@graphql.Resolver(() => Many)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ManyResolverBase {
  constructor(
    protected readonly service: ManyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Many",
    action: "read",
    possession: "any",
  })
  async _maniesMeta(
    @graphql.Args() args: ManyFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Many])
  @nestAccessControl.UseRoles({
    resource: "Many",
    action: "read",
    possession: "any",
  })
  async manies(@graphql.Args() args: ManyFindManyArgs): Promise<Many[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Many, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Many",
    action: "read",
    possession: "own",
  })
  async many(@graphql.Args() args: ManyFindUniqueArgs): Promise<Many | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Many)
  @nestAccessControl.UseRoles({
    resource: "Many",
    action: "create",
    possession: "any",
  })
  async createMany(@graphql.Args() args: CreateManyArgs): Promise<Many> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Many)
  @nestAccessControl.UseRoles({
    resource: "Many",
    action: "update",
    possession: "any",
  })
  async updateMany(@graphql.Args() args: UpdateManyArgs): Promise<Many | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Many)
  @nestAccessControl.UseRoles({
    resource: "Many",
    action: "delete",
    possession: "any",
  })
  async deleteMany(@graphql.Args() args: DeleteManyArgs): Promise<Many | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [One])
  @nestAccessControl.UseRoles({
    resource: "One",
    action: "read",
    possession: "any",
  })
  async ones(
    @graphql.Parent() parent: Many,
    @graphql.Args() args: OneFindManyArgs
  ): Promise<One[]> {
    const results = await this.service.findOnes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
