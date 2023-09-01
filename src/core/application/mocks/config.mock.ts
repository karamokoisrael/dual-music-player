import { AppConfig } from "../../domain/models";
import { paymentMethodMock } from "./payment-method.mock";

export const appConfigMock: AppConfig = {
  paymentMethods: [paymentMethodMock],
  countries: [],
  adminConfigs: {
    usdXofPrice: 0,
    usdCmciPrice: 0,
    cmciCurrencySymbol: "",
    cmciUsdAffiliationBonus: 0,
    paymentMethods: "",
    noVerificationAmountLimit: 0,
    basicVerificationAmountLimit: 0,
    identityVerificationAmountLimit: 0,
    addressVerificationAmountLimit: 0,
    transactionsResponseMessages: "",
    globalAuthLevel: 0,
    appSettings: "",
  },
  preferencies: {
    CryptosFractionDigits: "",
    GlobalMinimumFractionDigits: "",
  },
};
export const emptyAppConfigMock: AppConfig = {
  paymentMethods: [],
  countries: [],
  adminConfigs: {
    usdXofPrice: 0,
    usdCmciPrice: 0,
    cmciCurrencySymbol: "",
    cmciUsdAffiliationBonus: 0,
    paymentMethods: "",
    noVerificationAmountLimit: 0,
    basicVerificationAmountLimit: 0,
    identityVerificationAmountLimit: 0,
    addressVerificationAmountLimit: 0,
    transactionsResponseMessages: "",
    globalAuthLevel: 0,
    appSettings: "",
  },
  preferencies: {
    CryptosFractionDigits: "",
    GlobalMinimumFractionDigits: "",
  },
};
