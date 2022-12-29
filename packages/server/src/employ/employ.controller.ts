import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployService } from "./employ.service";
import { EmployControllerBase } from "./base/employ.controller.base";

@swagger.ApiTags("employs")
@common.Controller("employs")
export class EmployController extends EmployControllerBase {
  constructor(
    protected readonly service: EmployService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
