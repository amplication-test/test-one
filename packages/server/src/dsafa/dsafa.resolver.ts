import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DsafaResolverBase } from "./base/dsafa.resolver.base";
import { Dsafa } from "./base/Dsafa";
import { DsafaService } from "./dsafa.service";

@graphql.Resolver(() => Dsafa)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DsafaResolver extends DsafaResolverBase {
  constructor(
    protected readonly service: DsafaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
