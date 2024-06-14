import { Module } from "@nestjs/common";
import { MatchmakingService } from "./matchmaking.service";
import { MatchmakingController } from "./matchmaking.controller";
import { MatchmakingResolver } from "./matchmaking.resolver";

@Module({
  controllers: [MatchmakingController],
  providers: [MatchmakingService, MatchmakingResolver],
  exports: [MatchmakingService],
})
export class MatchmakingModule {}
