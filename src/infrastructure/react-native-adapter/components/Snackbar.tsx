import { Snackbar as PaperSnackbar } from "react-native-paper";
import theme from "../../configurations/constants/theme";
import {
  useAlertStore,
  AlertType,
} from "@infrastructure/zustand-store-adapter/alert.store";

export default function Snackbar() {
  const colors: Record<Partial<AlertType>, string> = {
    primary: theme.colors.primary,
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
  };

  const alertStore = useAlertStore();
  const visible = useAlertStore((state) => state.visible);
  const content = useAlertStore((state) => state.content);
  const action = useAlertStore((state) => state.action);
  const type = useAlertStore((state) => state.type);

  return (
    <PaperSnackbar
      style={type == "primary" ? {} : { backgroundColor: colors[type] }}
      visible={visible}
      onDismiss={alertStore.hideAlert}
      action={action}
    >
      {content}
    </PaperSnackbar>
  );
}
