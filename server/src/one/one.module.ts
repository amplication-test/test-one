import { Module } from "@nestjs/common";
import { OneModuleBase } from "./base/one.module.base";
import { OneService } from "./one.service";
import { OneController } from "./one.controller";
import { OneResolver } from "./one.resolver";

@Module({
  imports: [OneModuleBase],
  controllers: [OneController],
  providers: [OneService, OneResolver],
  exports: [OneService],
})
export class OneModule {}
