import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImplementorModuleBase } from "./base/implementor.module.base";
import { ImplementorService } from "./implementor.service";
import { ImplementorController } from "./implementor.controller";
import { ImplementorResolver } from "./implementor.resolver";

@Module({
  imports: [ImplementorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImplementorController],
  providers: [ImplementorService, ImplementorResolver],
  exports: [ImplementorService],
})
export class ImplementorModule {}
