import { IconButton } from "react-native-paper";
import { Linking } from "react-native";
import environment from "@infrastructure/configurations/constants/environment";
export function SupportSection() {
  return (
    <IconButton
      icon="face-agent"
      onPress={() => {
        Linking.openURL(`whatsapp://send?phone=${environment.whatsappNumber}`);
      }}
    />
  );
}
export default SupportSection;
