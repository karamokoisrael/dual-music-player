import { emptyExchangeMock, emptyCheckout } from "@application/mocks";
import { ExchangeStore, Exchange, Checkout } from "@domain/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

export const useExchangeStore = create(
  persist<ExchangeStore>(
    (set, get) => ({
      hydrated: false,
      exchange: emptyExchangeMock,
      checkout: emptyCheckout,
      alterExchangeState: (exchange: Partial<Exchange>) =>
        set({
          exchange: {
            ...get().exchange,
            ...exchange,
          },
        }),
      alterCheckoutState: (checkout: Partial<Checkout>) =>
        set({
          checkout: {
            ...get().checkout,
            ...checkout,
          },
        }),
    }),
    {
      name: "exchange-store",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    }
  )
);
