import { Injectable } from "@nestjs/common";
import { MatchmakingInputDto } from "../matchmaking/MatchmakingInputDto";
import { NotificationDto } from "../matchmaking/NotificationDto";
import { UserRegistrationDto } from "../matchmaking/UserRegistrationDto";

@Injectable()
export class MatchmakingService {
  constructor() {}
  async MatchmakingProcess(args: MatchmakingInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async NotificationSend(args: NotificationDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async PerformMatchmaking(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SendNotification(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UserRegister(args: UserRegistrationDto): Promise<UserRegistrationDto> {
    throw new Error("Not implemented");
  }
}
