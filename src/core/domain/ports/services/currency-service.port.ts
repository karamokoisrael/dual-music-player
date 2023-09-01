export abstract class CurrencyServicePort {
  abstract getBalance(): string;

  abstract formatPriceDp(price: any, currency?: string): number | string;

  abstract formatPrice(amount: number | string): string;

  abstract formatPriceNoCurrency(amount: number, paymentType: string | null): number | string;

  abstract formatCMPrice(amount: number): string;

  abstract removeUselessZeros(value: undefined | null | any, paymentMethodId: number): string;
}
