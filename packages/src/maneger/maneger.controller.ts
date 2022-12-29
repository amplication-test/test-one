import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManegerService } from "./maneger.service";
import { ManegerControllerBase } from "./base/maneger.controller.base";

@swagger.ApiTags("manegers")
@common.Controller("manegers")
export class ManegerController extends ManegerControllerBase {
  constructor(
    protected readonly service: ManegerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
