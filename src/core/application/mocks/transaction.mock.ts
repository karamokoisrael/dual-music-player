import { paymentMethodMock } from "./payment-method.mock";

export const defaultManualTransDetails = {
  paymentMethod: paymentMethodMock,
  transferAmount: 0,
  orderNumber: "",
};

export const initialTransactionComputationOutputMock: any =
{
  transferAmount: 0,
  convertedTransferAmount: 0,
  taxes: 0,
  convertedTaxes: 0,
  receptionAmount: 0,
  convertedReceptionAmount: 0,
  errorMessage: null,
  convertedTransferTaxes: 0,
  convertedReceptionTaxes: 0,
};
