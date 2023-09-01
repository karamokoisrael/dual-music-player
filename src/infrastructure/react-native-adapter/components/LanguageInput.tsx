import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export function LanguageInput() {
  const navigation = useNavigation();
  return (
    <IconButton
      icon="translate"
      onPress={() => navigation.navigate("LanguageSettings")}
    />
  );
}
export default LanguageInput;
