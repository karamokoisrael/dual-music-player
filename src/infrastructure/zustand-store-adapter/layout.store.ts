import { LayoutStore } from "@domain/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

export const useLayoutStore = create(
  persist<LayoutStore>(
    (set, get) => ({
      hydrated: false,
      termsAndConditionsAccepted: false,
      acceptTermsAndConditions: () => set({ termsAndConditionsAccepted: true }),
    }),
    {
      name: "layout-store",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    }
  )
);
