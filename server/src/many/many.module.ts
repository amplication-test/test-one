import { Module } from "@nestjs/common";
import { ManyModuleBase } from "./base/many.module.base";
import { ManyService } from "./many.service";
import { ManyController } from "./many.controller";
import { ManyResolver } from "./many.resolver";

@Module({
  imports: [ManyModuleBase],
  controllers: [ManyController],
  providers: [ManyService, ManyResolver],
  exports: [ManyService],
})
export class ManyModule {}
