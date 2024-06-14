import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InnovatorServiceBase } from "./base/innovator.service.base";

@Injectable()
export class InnovatorService extends InnovatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
