import { PaymentMethod } from "./paymentMethod.model";

export interface Checkout {
  exchange: Exchange;
  details: ExchangeResponse;
}
export interface Exchange {
  transferAmount: number;
  transferData: string;
  receptionData: string;
  transferPaymentMethod: PaymentMethod;
  receptionPaymentMethod: PaymentMethod;
  memo: string | null;
}
export interface ExchangeStore {
  hydrated: boolean;
  exchange: Exchange;
  checkout: Checkout;
  alterExchangeState: (exchange: Partial<Exchange>) => void;
  alterCheckoutState: (checkout: Partial<Checkout>) => void;
}

export interface CalculateRequest {
  transferPaymentMethodId: number;
  receptionPaymentMethodId: number;
  transferAmount: number;
}
export type CalculateResponse = {
  transferAmount: number;
  convertedTransferAmount: number;
  taxes: number;
  convertedTaxes: number;
  receptionAmount: number;
  convertedReceptionAmount: number;
  errorMessage: string | null;
  convertedTransferTaxes: number;
  convertedReceptionTaxes: number;
};

export interface ExchangeRequest {
  transferPaymentMethodId: number;
  receptionPaymentMethodId: number;
  transferData: string;
  receptionData: string;
  transferAmount: number | string;
  memo: string | null;
}

export interface ExchangeResponse {
  errorMessage: string;
  proceedLink: string;
  transferId: number;
  receptionId: number;
  proceedData: string;
}
