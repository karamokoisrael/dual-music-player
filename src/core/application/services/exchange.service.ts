import {
  AppConfig,
  BaseHttpResponse,
  CalculateRequest,
  CalculateResponse,
  ExchangeRequest,
  ExchangeResponse,
  User,
} from "../../domain/models";
import { HttpRepository } from "../repositories";
import { ExchangeServicePort, TranslationServicePort } from "@domain/ports/services";

export class ExchangeService implements ExchangeServicePort {
  private user: User;
  private appConfig: AppConfig;
  private httpRepository: HttpRepository;
  private collection = "Transaction";
  constructor(readonly translationService: TranslationServicePort, user: User, appConfig: AppConfig) {
    this.user = user;
    this.appConfig = appConfig;
    this.httpRepository = new HttpRepository(translationService, this.user.token);
  }

  async caculate(
    request: CalculateRequest
  ): Promise<BaseHttpResponse<CalculateResponse>> {
    const result = await this.httpRepository.post<CalculateResponse>(
      `/${this.collection}/Calculate`,
      request
    );
    return result;
  }

  async exchange(
    request: ExchangeRequest
  ): Promise<BaseHttpResponse<ExchangeResponse>> {
    request.transferData = request.transferData.replace("+", "");
    request.receptionData = request.receptionData.replace("+", "");
    const result = await this.httpRepository.post<ExchangeResponse>(
      `/${this.collection}/Create`,
      request
    );
    return result;
  }
}
