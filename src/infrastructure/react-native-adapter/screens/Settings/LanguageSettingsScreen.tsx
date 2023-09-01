import { Ionicons } from "@expo/vector-icons";
import theme from "@infrastructure/configurations/constants/theme";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import { useNavigation } from "@react-navigation/native";
import useConfigStore from "@infrastructure/zustand-store-adapter/config.store";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
const LANGUAGES = [
  { code: "en", label: "english" },
  { code: "fr", label: "french" },
];
export default function LanguageSettingsScreen() {
  const navigation = useNavigation();
  const configStore = useConfigStore();
  const selectedLanguageCode = i18n.locale;

  const setLanguage = (code: string) => {
    configStore.setLanguage(code);
    navigation.goBack();
    // navigation.navigate("Home");
    // navigation.reset({index: 0, [{ name: "Home"}]})
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{i18n.t("select_a_language")}</Text>
        <Ionicons color="#444" size={28} name="ios-language-outline" />
      </View>
      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <TouchableOpacity
            key={language.code}
            style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
          >
            <Text
              style={[selectedLanguage ? styles.selectedText : styles.text]}
            >
              {i18n.t(language.label)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#444",
    fontSize: 28,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    width: "100%",
    fontSize: 18,
    color: "#000",
    paddingVertical: 4,
  },
  selectedText: {
    width: "100%",
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.primary,
    paddingVertical: 4,
  },
});
