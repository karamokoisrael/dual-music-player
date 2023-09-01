import { Checkout, Exchange, ExchangeResponse } from "../../domain/models";

export const emptyExchangeMock: Exchange = {
  transferAmount: 0,
  transferData: "",
  receptionData: "",
  memo: null,
  transferPaymentMethod: {} as any,
  receptionPaymentMethod: {} as any,
};

export const emptyExchangeResponse: ExchangeResponse = {
  errorMessage: "",
  proceedLink: "",
  transferId: 0,
  receptionId: 0,
  proceedData: "",
};

export const emptyCheckout: Checkout = {
  exchange: emptyExchangeMock,
  details: emptyExchangeResponse,
};
