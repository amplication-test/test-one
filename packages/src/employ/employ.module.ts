import { Module } from "@nestjs/common";
import { EmployModuleBase } from "./base/employ.module.base";
import { EmployService } from "./employ.service";
import { EmployController } from "./employ.controller";
import { EmployResolver } from "./employ.resolver";

@Module({
  imports: [EmployModuleBase],
  controllers: [EmployController],
  providers: [EmployService, EmployResolver],
  exports: [EmployService],
})
export class EmployModule {}
