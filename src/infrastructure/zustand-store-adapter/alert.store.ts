import { Button } from "react-native-paper";
import create from "zustand";

export type AlertType = "primary" | "success" | "warning" | "danger";

export type AlertAction = Omit<
  React.ComponentProps<typeof Button>,
  "children"
> & { label: string };

export type AlertStore = {
  visible: boolean;
  content: string;
  duration: number;
  type: AlertType;
  action: AlertAction;
  showAlert: (
    content: string,
    action?: AlertAction,
    type?: AlertType,
    duration?: number
  ) => void;
  hideAlert: () => void;
  toggleAlert: () => void;
};

const defaultDuration = 7000;
const defaultContent = "";
const getDefaultAction = (get: any) => {
  const defaultAction: AlertAction = {
    // label: i18n.t("close"),
    label: "",
    icon: "close",
    onPress: () => get().hideAlert(),
  };
  return defaultAction;
};

export const useAlertStore = create<AlertStore>((set, get) => ({
  visible: false,
  content: defaultContent,
  type: "primary",
  duration: defaultDuration,
  action: {
    label: "",
  },
  showAlert: (
    content: string,
    action?: AlertAction,
    type?: AlertType,
    duration?: number
  ) => {
    const data: Record<string, any> = {
      content,
      visible: true,
    };
    if (action) data.action = action;
    if (!action) data.action = getDefaultAction(get);
    if (type) data.type = type;
    if (duration) data.duration = duration;
    return set(data);
  },
  hideAlert: () => set({ visible: false }),
  toggleAlert: () => set({ visible: !get().visible }),
}));

