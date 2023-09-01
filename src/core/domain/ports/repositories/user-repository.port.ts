import { BaseHttpResponse, User } from "@domain/models";

export abstract class UserRepositoryPort {
  abstract updateOne(data: any): Promise<Record<string, any>>;
  abstract readOne(): Promise<BaseHttpResponse<User>>;
  abstract isConnected(user: User): boolean;
}
