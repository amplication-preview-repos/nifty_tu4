import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InnovatorService } from "./innovator.service";
import { InnovatorControllerBase } from "./base/innovator.controller.base";

@swagger.ApiTags("innovators")
@common.Controller("innovators")
export class InnovatorController extends InnovatorControllerBase {
  constructor(
    protected readonly service: InnovatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
