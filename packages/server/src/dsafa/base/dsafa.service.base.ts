/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Dsafa } from "generated-prisma-client";

export class DsafaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DsafaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DsafaFindManyArgs>
  ): Promise<number> {
    return this.prisma.dsafa.count(args);
  }

  async findMany<T extends Prisma.DsafaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DsafaFindManyArgs>
  ): Promise<Dsafa[]> {
    return this.prisma.dsafa.findMany(args);
  }
  async findOne<T extends Prisma.DsafaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DsafaFindUniqueArgs>
  ): Promise<Dsafa | null> {
    return this.prisma.dsafa.findUnique(args);
  }
  async create<T extends Prisma.DsafaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DsafaCreateArgs>
  ): Promise<Dsafa> {
    return this.prisma.dsafa.create<T>(args);
  }
  async update<T extends Prisma.DsafaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DsafaUpdateArgs>
  ): Promise<Dsafa> {
    return this.prisma.dsafa.update<T>(args);
  }
  async delete<T extends Prisma.DsafaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DsafaDeleteArgs>
  ): Promise<Dsafa> {
    return this.prisma.dsafa.delete(args);
  }
}