import { BaseHttpResponse, CalculateRequest, CalculateResponse, ExchangeRequest, ExchangeResponse } from "@domain/models";

export abstract class ExchangeServicePort {
  abstract caculate(
    request: CalculateRequest
  ): Promise<BaseHttpResponse<CalculateResponse>>;
  abstract exchange(
    request: ExchangeRequest
  ): Promise<BaseHttpResponse<ExchangeResponse>>;
}
