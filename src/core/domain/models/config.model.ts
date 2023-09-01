import { Country } from "./globalization.model";
import { PaymentMethod } from "./paymentMethod.model";

export type AppConfig = {
  paymentMethods: Array<PaymentMethod>;
  countries: Array<Country>;
  adminConfigs: {
    usdXofPrice: number;
    usdCmciPrice: number;
    cmciCurrencySymbol: string;
    cmciUsdAffiliationBonus: number;
    paymentMethods: string;
    noVerificationAmountLimit: number;
    basicVerificationAmountLimit: number;
    identityVerificationAmountLimit: number;
    addressVerificationAmountLimit: number;
    transactionsResponseMessages: string;
    globalAuthLevel: number;
    appSettings: string;
  };
  preferencies: {
    CryptosFractionDigits: string;
    GlobalMinimumFractionDigits: string;
  };
};

export type GetConfigResponse = AppConfig;

export interface ConfigStore {
  hydrated: boolean;
  appConfig: AppConfig;
  language: string;
  setAppConfig: (appConfig: Partial<AppConfig>) => void;
  setLanguage: (language: string) => void;
}
