import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImplementorService } from "./implementor.service";
import { ImplementorControllerBase } from "./base/implementor.controller.base";

@swagger.ApiTags("implementors")
@common.Controller("implementors")
export class ImplementorController extends ImplementorControllerBase {
  constructor(
    protected readonly service: ImplementorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
