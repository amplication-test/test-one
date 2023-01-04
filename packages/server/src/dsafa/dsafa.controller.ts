import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DsafaService } from "./dsafa.service";
import { DsafaControllerBase } from "./base/dsafa.controller.base";

@swagger.ApiTags("dsafas")
@common.Controller("dsafas")
export class DsafaController extends DsafaControllerBase {
  constructor(
    protected readonly service: DsafaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
