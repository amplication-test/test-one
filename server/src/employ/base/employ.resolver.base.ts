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
import { CreateEmployArgs } from "./CreateEmployArgs";
import { UpdateEmployArgs } from "./UpdateEmployArgs";
import { DeleteEmployArgs } from "./DeleteEmployArgs";
import { EmployFindManyArgs } from "./EmployFindManyArgs";
import { EmployFindUniqueArgs } from "./EmployFindUniqueArgs";
import { Employ } from "./Employ";
import { Maneger } from "../../maneger/base/Maneger";
import { EmployService } from "../employ.service";

@graphql.Resolver(() => Employ)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployResolverBase {
  constructor(
    protected readonly service: EmployService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Employ",
    action: "read",
    possession: "any",
  })
  async _employsMeta(
    @graphql.Args() args: EmployFindManyArgs
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
  @graphql.Query(() => [Employ])
  @nestAccessControl.UseRoles({
    resource: "Employ",
    action: "read",
    possession: "any",
  })
  async employs(@graphql.Args() args: EmployFindManyArgs): Promise<Employ[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Employ, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Employ",
    action: "read",
    possession: "own",
  })
  async employ(
    @graphql.Args() args: EmployFindUniqueArgs
  ): Promise<Employ | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Employ)
  @nestAccessControl.UseRoles({
    resource: "Employ",
    action: "create",
    possession: "any",
  })
  async createEmploy(@graphql.Args() args: CreateEmployArgs): Promise<Employ> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        maneger: args.data.maneger
          ? {
              connect: args.data.maneger,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Employ)
  @nestAccessControl.UseRoles({
    resource: "Employ",
    action: "update",
    possession: "any",
  })
  async updateEmploy(
    @graphql.Args() args: UpdateEmployArgs
  ): Promise<Employ | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          maneger: args.data.maneger
            ? {
                connect: args.data.maneger,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Employ)
  @nestAccessControl.UseRoles({
    resource: "Employ",
    action: "delete",
    possession: "any",
  })
  async deleteEmploy(
    @graphql.Args() args: DeleteEmployArgs
  ): Promise<Employ | null> {
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
  @graphql.ResolveField(() => Maneger, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Maneger",
    action: "read",
    possession: "any",
  })
  async maneger(@graphql.Parent() parent: Employ): Promise<Maneger | null> {
    const result = await this.service.getManeger(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
