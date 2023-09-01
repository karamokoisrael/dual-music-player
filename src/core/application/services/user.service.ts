import { TranslationServicePort, UserServicePort } from "@domain/ports/services";
import { AppConfig, User } from "@domain/models";

export class UserService implements UserServicePort {
  private user: User;
  private appConfig: AppConfig;
  constructor(readonly translationService: TranslationServicePort, user: User, appConfig: AppConfig) {
    this.user = user;
    this.appConfig = appConfig;
  }
}
