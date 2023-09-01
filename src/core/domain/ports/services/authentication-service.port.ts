import { RegisterRequest, RegisterResponse } from "../../models/auth-model";
import {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  BaseHttpResponse,
} from "../../models";

export abstract class AuthenticationServicePort {
  abstract login(payload: LoginRequest): Promise<BaseHttpResponse<LoginResponse>>;
  abstract register(
    payload: RegisterRequest
  ): Promise<BaseHttpResponse<RegisterResponse>>;
  abstract logout(
    payload: LogoutRequest,
    authToken: string
  ): Promise<BaseHttpResponse<null>>;
}
