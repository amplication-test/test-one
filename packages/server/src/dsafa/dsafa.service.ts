import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DsafaServiceBase } from "./base/dsafa.service.base";

@Injectable()
export class DsafaService extends DsafaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
