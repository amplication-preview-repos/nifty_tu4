import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MatchmakingService } from "./matchmaking.service";
import { UserRegistrationDto } from "../matchmaking/UserRegistrationDto";

@swagger.ApiTags("matchmakings")
@common.Controller("matchmakings")
export class MatchmakingController {
  constructor(protected readonly service: MatchmakingService) {}

  @common.Post("/perform-matchmaking")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MatchmakingProcess(
    @common.Body()
    body: UserRegistrationDto
  ): Promise<string> {
        return this.service.MatchmakingProcess(body);
      }

  @common.Post("/send-notification")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NotificationSend(
    @common.Body()
    body: UserRegistrationDto
  ): Promise<string> {
        return this.service.NotificationSend(body);
      }

  @common.Get("/:id/perform-matchmaking")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformMatchmaking(
    @common.Body()
    body: UserRegistrationDto
  ): Promise<string> {
        return this.service.PerformMatchmaking(body);
      }

  @common.Get("/:id/register-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: UserRegistrationDto
  ): Promise<string> {
        return this.service.RegisterUser(body);
      }

  @common.Get("/:id/send-notification")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendNotification(
    @common.Body()
    body: UserRegistrationDto
  ): Promise<string> {
        return this.service.SendNotification(body);
      }

  @common.Post("/register-user")
  @swagger.ApiOkResponse({
    type: UserRegistrationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserRegister(
    @common.Body()
    body: UserRegistrationDto
  ): Promise<UserRegistrationDto> {
        return this.service.UserRegister(body);
      }
}
