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
import { DeleteDsafaArgs } from "./DeleteDsafaArgs";
import { DsafaFindManyArgs } from "./DsafaFindManyArgs";
import { DsafaFindUniqueArgs } from "./DsafaFindUniqueArgs";
import { Dsafa } from "./Dsafa";
import { DsafaService } from "../dsafa.service";

@graphql.Resolver(() => Dsafa)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DsafaResolverBase {
  constructor(
    protected readonly service: DsafaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Dsafa",
    action: "read",
    possession: "any",
  })
  async _dsafasMeta(
    @graphql.Args() args: DsafaFindManyArgs
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
  @graphql.Query(() => [Dsafa])
  @nestAccessControl.UseRoles({
    resource: "Dsafa",
    action: "read",
    possession: "any",
  })
  async dsafas(@graphql.Args() args: DsafaFindManyArgs): Promise<Dsafa[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Dsafa, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dsafa",
    action: "read",
    possession: "own",
  })
  async dsafa(
    @graphql.Args() args: DsafaFindUniqueArgs
  ): Promise<Dsafa | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dsafa)
  @nestAccessControl.UseRoles({
    resource: "Dsafa",
    action: "delete",
    possession: "any",
  })
  async deleteDsafa(
    @graphql.Args() args: DeleteDsafaArgs
  ): Promise<Dsafa | null> {
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
}
