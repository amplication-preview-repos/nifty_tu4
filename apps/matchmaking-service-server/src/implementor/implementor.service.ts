import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImplementorServiceBase } from "./base/implementor.service.base";

@Injectable()
export class ImplementorService extends ImplementorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
