import { emptyUserMock } from "@application/mocks";
import { User, UserStore } from "@domain/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      hydrated: false,
      user: emptyUserMock,
      setUser: (user: Partial<User>) =>
        set({
          user: {
            ...get().user,
            ...user,
            token: (get().user.token ? get().user.token : user.token) as string,
          },
        }),

      logout: () => set({ user: emptyUserMock }),
    }),
    {
      name: "user-store",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    }
  )
);
