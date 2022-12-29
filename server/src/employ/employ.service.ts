import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployServiceBase } from "./base/employ.service.base";

@Injectable()
export class EmployService extends EmployServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
