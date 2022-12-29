import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManyServiceBase } from "./base/many.service.base";

@Injectable()
export class ManyService extends ManyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
