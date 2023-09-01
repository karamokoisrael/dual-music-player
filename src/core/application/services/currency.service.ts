import { AppConfig, User } from "@domain/models";
import { CurrencyServicePort, TranslationServicePort } from "@domain/ports/services";

export class CurrencyService implements CurrencyServicePort {
  private defaultCurrency = "XOF";
  private defaultPrecision = 2;
  private user: User;
  private appConfig: AppConfig;
  constructor(private readonly translationService: TranslationServicePort, user: User, appConfig: AppConfig) {
    this.user = user;
    this.appConfig = appConfig;
  }

  getBalance() {
    return this.formatCMPrice(this.user.balance);
  }

  formatPriceDp(price: any, currency?: string) {
    if (!currency)
      currency = this.user.currency ? this.user.currency : this.defaultCurrency;
    return parseFloat(price).toLocaleString(this.translationService.getLanguage(), {
      style: "currency",
      currency: currency,
    });
  }

  formatPrice(amount: number | string) {
    if (!this.user.language) return amount.toString();
    return this.formatPriceDp(amount);
  }

  formatPriceNoCurrency(amount: number, paymentType: string | null) {
    if (!this.user.language) return amount.toString();
    const minimumFractionDigits =
      paymentType == "crypto"
        ? this.appConfig.preferencies.CryptosFractionDigits
        : this.appConfig.preferencies.GlobalMinimumFractionDigits;
    return parseFloat(amount.toString())
      .toLocaleString(
        `${this.user.language}-${this.user.language.toUpperCase()}`,
        {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: minimumFractionDigits as any,
        }
      )
      .replace("US", "")
      .replace("$", "");
  }

  formatCMPrice(amount: number) {
    if (!amount) return "0";
    if (!this.user.language) return amount.toString();
    try {
      return `${parseFloat(amount.toString())
        .toLocaleString(
          `${this.user.language}-${this.user.language.toUpperCase()}`,
          {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }
        )
        .replace("US", "")
        .replace("$", "")}  ${this.appConfig.adminConfigs.cmciCurrencySymbol}`;
    } catch (error) {
      return `${amount} CM`;
    }
  }

  removeUselessZeros(value: undefined | null | any, paymentMethodId = -1) {
    if (value == undefined || value == null || value == "") return value;
    if (paymentMethodId == -1 || this.appConfig.paymentMethods.length == 0)
      return value;
    let precision = this.defaultPrecision;
    precision =
      this.appConfig?.paymentMethods.find((pm) => pm.id == paymentMethodId)
        ?.precision || this.defaultPrecision;
    const output = this.formatPrice(
      parseFloat(value).toFixed(precision).toString()
    );
    return output.replace(/(\.0+|0+)$/, "");
  }
}
