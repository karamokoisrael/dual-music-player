
// import useConfigStore from "../../zustand-store-adapter/config.store";
// import useSWR from "swr";
// import { DEFAULT_SWR_CONFIG } from "@infrastructure/configurations/constants/request";
// import { ConfigRepository } from "../../../core/application/repositories";
// import { useLayoutStore } from "@infrastructure/zustand-store-adapter/layout.store";
// import { TranslationService } from "../services/translation.service";
// import { GetConfigResponse } from "@domain/models";
export default function useAppConfig() {
  // const configStore = useConfigStore();
  // const configStoreHydrated = useConfigStore((state) => state.hydrated);
  // const layoutStoreHydrated = useLayoutStore((state) => state.hydrated);
  // const paymentMethods = useConfigStore(
  //   (state) => state.appConfig.paymentMethods
  // );
  // const translationService = new TranslationService();
  // const configRepository = new ConfigRepository(translationService);
  // const configCtrl = useSWR<GetConfigResponse>(
  //   "getAppConfigs",
  //   async () => {
  //     const res = await configRepository.read();
  //     if (res.statusCode != 200) {
  //       if (configStoreHydrated && paymentMethods.length != 0) {
  //         return configStore.appConfig;
  //       } else {
  //         throw new Error("Error while fetching configs");
  //       }
  //     }

  //     configStore.setAppConfig(res.data as GetConfigResponse);
  //     return res.data as GetConfigResponse;
  //   },
  //   DEFAULT_SWR_CONFIG
  // );

  return {
    loading: false
    
    // !(
    //   configCtrl.data &&
    //   configCtrl.data?.paymentMethods.length !== 0 &&
    //   layoutStoreHydrated
    // ),
  };
}
