import { HttpRepository } from "../repositories/http.repository";
import { BaseHttpResponse, Tokens, User } from "@domain/models";
import { AuthServicePort, TranslationServicePort } from "@domain/ports/services";

export class AuthService implements AuthServicePort {
  private collection = "User";
  private accessToken?: string;
  private httpRepository: HttpRepository;
  constructor(readonly translationService: TranslationServicePort, accessToken?: string) {
    this.accessToken = accessToken;
    this.httpRepository = new HttpRepository(translationService, this.accessToken);
  }

  async login(data: any) {
    if (data.phone) data.phone = data.phone.replace("+", "");
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/Login`,
      data
    );
    return result;
  }

  async register(data: any) {
    if (data.phone) data.phone = data.phone.replace("+", "");
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/Register`,
      data
    );
    console.log(result);
    
    return result;
  }

  async passForgotten(data: any) {
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/PassForgotten`,
      data
    );
    return result;
  }

  async reinitPassword(data: any) {
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/ReinitPassword`,
      data
    );
    return result;
  }

  async refreshToken(
    user: User,
    hard = false
  ): Promise<BaseHttpResponse<Tokens>> {
    if (
      user.refreshToken == undefined ||
      user.refreshToken == null ||
      user.refreshToken == "" ||
      user.tokenExpiration == undefined
    )
      throw new Error("User not connected");

    const currentDate = new Date().getTime();
    const expirationDate = new Date(user.tokenExpiration).getTime();
    const defaultDate = new Date("0001-01-01T00:00:00").getTime();
    const dateDiff = Math.ceil(
      (expirationDate - currentDate) / (1000 * 3600 * 24)
    );
    if (
      (expirationDate == defaultDate || dateDiff < 0 || dateDiff > 5) &&
      hard == false
    )
      throw new Error("Date not arrived yet");
    const result = await this.httpRepository.post<Tokens>(
      `/${this.collection}/RefreshToken`,
      { refreshToken: user.refreshToken }
    );
    return result;
  }

  async logout(user: User) {
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/Logout`,
      { refreshToken: user.refreshToken }
    );
    // logout(() => {
    //   window.location.reload();
    // });
    return result;
  }
}
