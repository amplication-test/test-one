/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Maneger, Employ } from "@prisma/client";

export class ManegerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ManegerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManegerFindManyArgs>
  ): Promise<number> {
    return this.prisma.maneger.count(args);
  }

  async findMany<T extends Prisma.ManegerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManegerFindManyArgs>
  ): Promise<Maneger[]> {
    return this.prisma.maneger.findMany(args);
  }
  async findOne<T extends Prisma.ManegerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManegerFindUniqueArgs>
  ): Promise<Maneger | null> {
    return this.prisma.maneger.findUnique(args);
  }
  async create<T extends Prisma.ManegerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManegerCreateArgs>
  ): Promise<Maneger> {
    return this.prisma.maneger.create<T>(args);
  }
  async update<T extends Prisma.ManegerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManegerUpdateArgs>
  ): Promise<Maneger> {
    return this.prisma.maneger.update<T>(args);
  }
  async delete<T extends Prisma.ManegerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManegerDeleteArgs>
  ): Promise<Maneger> {
    return this.prisma.maneger.delete(args);
  }

  async findEmploies(
    parentId: number,
    args: Prisma.EmployFindManyArgs
  ): Promise<Employ[]> {
    return this.prisma.maneger
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .emploies(args);
  }
}
