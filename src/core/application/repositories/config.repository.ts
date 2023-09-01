import { HttpRepository } from "./http.repository";
import { AppConfig, BaseHttpResponse } from "@domain/models";
import { ConfigRepositoryPort } from "@domain/models/config-repository.port";
import { TranslationServicePort } from "@domain/ports/services";

export class ConfigRepository implements ConfigRepositoryPort {
  private collection = "Config";
  private accessToken?: string;
  private httpRepository: HttpRepository;
  constructor(readonly translationService: TranslationServicePort, accessToken?: string) {
    this.accessToken = accessToken;
    this.httpRepository = new HttpRepository(translationService, this.accessToken);
  }
  async read(): Promise<BaseHttpResponse<AppConfig>> {
    const url = `/${this.collection}/GetAll`;
    const result = await this.httpRepository.get<AppConfig>(url);
    return result;
  }
}
