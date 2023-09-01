import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import { Text, SafeAreaView } from "react-native";

export default function WishlistScreen() {
  return (
    <SafeAreaView>
      <Text>{i18n.t("wishlist")}</Text>
    </SafeAreaView>
  );
}
