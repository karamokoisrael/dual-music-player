
import { User } from "@domain/models";
import { HttpRepository } from "./http.repository";
import { UserRepositoryPort } from "@domain/ports/repositories";
import { TranslationServicePort } from "@domain/ports/services";

export class UserRepository implements UserRepositoryPort {
  private collection = "User";
  private accessToken?: string;
  private httpRepository: HttpRepository;
  constructor(readonly translationService: TranslationServicePort, accessToken?: string) {
    this.accessToken = accessToken;
    this.httpRepository = new HttpRepository(translationService, this.accessToken);
  }

  async updateOne(data: any) {
    const result = await this.httpRepository.patch<Record<string, any>>(
      `/${this.collection}/Update`,
      data
    );
    return result;
  }

  async readOne() {
    const result = await this.httpRepository.get<User>(
      `/${this.collection}/GetData`
    );
    // if (res.status == 401) {
    //   const currentDate = new Date().getTime();
    //   const expirationDate = new Date(store.user.refreshTokenExpiration).getTime();
    //   const defaultDate = new Date('0001-01-01T00:00:00').getTime();
    //   const dateDiff = Math.ceil((expirationDate - currentDate) / (1000 * 3600 * 24));

    //   if (expirationDate != defaultDate && dateDiff > 0) {
    //     return await authService.refreshToken(store, store.user, true);
    //   } else {
    //     return await authService.logout(store.user);
    //   }
    // }
    // const jsonRes = await res.json();
    // if (jsonRes.transactionHistory != undefined && jsonRes.transactionHistory != null) {
    //   jsonRes.token = token;
    //   getUser((user: User) => {
    //     store.setUser({
    //       ...jsonRes,
    //       refreshToken: user.refreshToken,
    //       tokenExpiration: user.tokenExpiration,
    //       refreshTokenExpiration: user.refreshTokenExpiration,
    //     });
    //   });
    //   return jsonRes;
    // }
    return result;
  }

  isConnected(user: User): boolean {
    if (
      user != null &&
      user != undefined &&
      user.id != undefined &&
      user.id != -1
    ) {
      return true;
    }
    return false;
  }
}
