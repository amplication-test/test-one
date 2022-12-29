import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OneServiceBase } from "./base/one.service.base";

@Injectable()
export class OneService extends OneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
