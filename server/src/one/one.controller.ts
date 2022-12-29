import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OneService } from "./one.service";
import { OneControllerBase } from "./base/one.controller.base";

@swagger.ApiTags("ones")
@common.Controller("ones")
export class OneController extends OneControllerBase {
  constructor(
    protected readonly service: OneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
