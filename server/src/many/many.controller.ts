import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManyService } from "./many.service";
import { ManyControllerBase } from "./base/many.controller.base";

@swagger.ApiTags("manies")
@common.Controller("manies")
export class ManyController extends ManyControllerBase {
  constructor(
    protected readonly service: ManyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
