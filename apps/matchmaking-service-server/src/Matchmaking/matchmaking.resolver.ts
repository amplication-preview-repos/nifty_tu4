import * as graphql from "@nestjs/graphql";
import { MatchmakingInputDto } from "../matchmaking/MatchmakingInputDto";
import { NotificationDto } from "../matchmaking/NotificationDto";
import { UserRegistrationDto } from "../matchmaking/UserRegistrationDto";
import { MatchmakingService } from "./matchmaking.service";

export class MatchmakingResolver {
  constructor(protected readonly service: MatchmakingService) {}

  @graphql.Mutation(() => String)
  async MatchmakingProcess(
    @graphql.Args()
    args: MatchmakingInputDto
  ): Promise<string> {
    return this.service.MatchmakingProcess(args);
  }

  @graphql.Mutation(() => String)
  async NotificationSend(
    @graphql.Args()
    args: NotificationDto
  ): Promise<string> {
    return this.service.NotificationSend(args);
  }

  @graphql.Query(() => String)
  async PerformMatchmaking(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PerformMatchmaking(args);
  }

  @graphql.Query(() => String)
  async RegisterUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }

  @graphql.Query(() => String)
  async SendNotification(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendNotification(args);
  }

  @graphql.Mutation(() => UserRegistrationDto)
  async UserRegister(
    @graphql.Args()
    args: UserRegistrationDto
  ): Promise<UserRegistrationDto> {
    return this.service.UserRegister(args);
  }
}
