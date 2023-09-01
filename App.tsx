import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./src/infrastructure/configurations/constants/theme";
import useCachedResources from "./src/infrastructure/react-native-adapter/hooks/useCachedResources";
import Navigation from "./src/infrastructure/react-native-adapter/navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { useAppColorScheme, useDeviceContext } from "twrnc";
import * as Localization from "expo-localization";
import { useEffect } from "react";
import { envVersion } from "./src/infrastructure/configurations/constants/environment";
import SnackBar from "./src/infrastructure/react-native-adapter/components/Snackbar";
import useAppConfig from "./src/infrastructure/react-native-adapter/hooks/useAppConfig";
import PreLoader from "./src/infrastructure/react-native-adapter/components/PreLoader";
import tw from "./src/infrastructure/react-native-adapter/styles/tailwind";
import { defaultLocale, translations } from "./src/core/application/helpers";
import i18n from "./src/infrastructure/react-native-adapter/helpers/globalization.helper";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { loading } = useAppConfig();
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme] = useAppColorScheme(tw);

  useEffect(() => {
    if (envVersion != "development") {
      const detectedLanguage = Localization.locale.split("-")[0];
      if (
        Object.keys(translations).includes(detectedLanguage) &&
        detectedLanguage != defaultLocale
      ) {
        i18n.locale = detectedLanguage;
      }
    }
    i18n.locale = "fr";
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={{ ...theme, dark: colorScheme === "dark" }}>
        <SafeAreaProvider>
          {loading ? (
            <PreLoader />
          ) : (
            <>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
              <SnackBar />
            </>
          )}
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
