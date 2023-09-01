import { BaseHttpResponse, Tokens, User } from "@domain/models";

export abstract class AuthServicePort {
  abstract login(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract register(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract passForgotten(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract reinitPassword(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract refreshToken(
    user: User,
    hard: boolean
  ): Promise<BaseHttpResponse<Tokens>>;

  abstract logout(user: User): Promise<BaseHttpResponse<Record<string, any>>>;
}
