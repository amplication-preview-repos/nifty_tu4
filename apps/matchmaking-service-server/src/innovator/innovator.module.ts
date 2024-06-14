import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InnovatorModuleBase } from "./base/innovator.module.base";
import { InnovatorService } from "./innovator.service";
import { InnovatorController } from "./innovator.controller";
import { InnovatorResolver } from "./innovator.resolver";

@Module({
  imports: [InnovatorModuleBase, forwardRef(() => AuthModule)],
  controllers: [InnovatorController],
  providers: [InnovatorService, InnovatorResolver],
  exports: [InnovatorService],
})
export class InnovatorModule {}
