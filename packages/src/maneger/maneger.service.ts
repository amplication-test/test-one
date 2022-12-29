import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManegerServiceBase } from "./base/maneger.service.base";

@Injectable()
export class ManegerService extends ManegerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
