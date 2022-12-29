import { Module } from "@nestjs/common";
import { ManegerModuleBase } from "./base/maneger.module.base";
import { ManegerService } from "./maneger.service";
import { ManegerController } from "./maneger.controller";
import { ManegerResolver } from "./maneger.resolver";

@Module({
  imports: [ManegerModuleBase],
  controllers: [ManegerController],
  providers: [ManegerService, ManegerResolver],
  exports: [ManegerService],
})
export class ManegerModule {}
