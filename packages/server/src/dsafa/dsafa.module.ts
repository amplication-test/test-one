import { Module } from "@nestjs/common";
import { DsafaModuleBase } from "./base/dsafa.module.base";
import { DsafaService } from "./dsafa.service";
import { DsafaController } from "./dsafa.controller";
import { DsafaResolver } from "./dsafa.resolver";

@Module({
  imports: [DsafaModuleBase],
  controllers: [DsafaController],
  providers: [DsafaService, DsafaResolver],
  exports: [DsafaService],
})
export class DsafaModule {}
