import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import { AppConfig, ConfigStore } from "@domain/models";
import { emptyAppConfigMock } from "@application/mocks/config.mock";

const useConfigStore = create(
  persist<ConfigStore>(
    (set, get) => ({
      hydrated: false,
      appConfig: emptyAppConfigMock,
      language: "fr",
      setAppConfig: (appConfig: Partial<AppConfig>) =>
        set({ appConfig: { ...get().appConfig, ...appConfig } }),
      setLanguage: (language: string) => {
        i18n.locale = language;
        set({ language });
      },
    }),
    {
      name: "config-store",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
          i18n.locale = state.language;
        }
      },
    }
  )
);

export default useConfigStore;
