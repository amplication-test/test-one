import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ManegerResolverBase } from "./base/maneger.resolver.base";
import { Maneger } from "./base/Maneger";
import { ManegerService } from "./maneger.service";

@graphql.Resolver(() => Maneger)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ManegerResolver extends ManegerResolverBase {
  constructor(
    protected readonly service: ManegerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
