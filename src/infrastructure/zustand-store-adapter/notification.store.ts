import {
  NotificationStore,
  Notification,
} from "@domain/models/notification.model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

export const useNotificationStore = create(
  persist<NotificationStore>(
    (set, get) => ({
      hydrated: false,
      notifications: [],
      setNotifications: (notifications: Notification[]) =>
        set({ notifications }),
    }),
    {
      name: "notifications-store",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    }
  )
);
