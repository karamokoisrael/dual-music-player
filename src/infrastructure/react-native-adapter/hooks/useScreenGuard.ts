/* eslint-disable @typescript-eslint/no-unused-vars */
// import { emptyUserMock } from "../../../core/application/mocks";
// import { useUserStore } from "@infrastructure/zustand-store-adapter/user.store";
// import { useEffect, useState } from "react";

export default function useScreenGuard(
  _navigation: any,
  _notAuthentified = false
) {
  return {
    authentified: true,
    loading: false,
  };
  // const userStore = useUserStore((state) => state.user);
  // const userStoreHydrated = useUserStore((state) => state.hydrated);
  // const [subscriptionEnabled, setSubscriptionStatus] = useState(true);
  // useEffect(() => {
  //   if (userStoreHydrated && subscriptionEnabled) {
  //     if (userStore.id == emptyUserMock.id) {
  //       navigation.navigate("SignIn");
  //       return () => setSubscriptionStatus(false);
  //     } else {
  //       if (notAuthentified) navigation.navigate("Home");
  //       return setSubscriptionStatus(false);
  //     }
  //   }
  // }, [userStoreHydrated, userStore.id]);

  // return {
  //   authentified: userStore.id != emptyUserMock.id,
  //   loading: !userStoreHydrated,
  // };
}
