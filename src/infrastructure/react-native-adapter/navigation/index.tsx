/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { Text } from "react-native-paper";
import useScreenGuard from "../hooks/useScreenGuard";
import SignInScreen from "../screens/Authentication/SignInScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList, RootTabParamList } from "./types";
import LinkingConfiguration from "./LinkingConfiguration";
import NavigationBar from "../components/NavigationBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUpScreen from "../screens/Authentication/SignUpScreen";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import LanguageSettingsScreen from "@infrastructure/react-native-adapter/screens/Settings/LanguageSettingsScreen";
import PasswordForgottenScreen from "@infrastructure/react-native-adapter/screens/Authentication/PasswordForgottenScreenScreen";
import theme from "@infrastructure/configurations/constants/theme";
import TermsAndConditionsScreen from "@infrastructure/react-native-adapter/screens/Settings/TermsAndConditionsScreen";
import WishlistScreen from "../screens/Music/WishlistScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  useScreenGuard(navigation, true);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={AuthentifiedTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="LanguageSettings"
          component={LanguageSettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="PasswordForgotten"
          options={{ headerShown: false }}
          component={PasswordForgottenScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function AuthentifiedTabNavigator() {
  const navigation = useNavigation();
  useScreenGuard(navigation);
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: i18n.t("explore"),
          // header: (props) => <NavigationBar {...props} />,
          header: () => null,
          tabBarIcon: (options) => <TabBarIcon name="compass" options={options} />,
          tabBarLabel: (props) => <TabBarLabel {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: i18n.t("wishlist"),
          header: () => null,
          tabBarIcon: (options) => <TabBarIcon name="heart" options={options} />,
          tabBarLabel: (props) => <TabBarLabel {...props} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  options: any;
}) {
  return (
    <FontAwesome
      size={30}
      style={{
        ...(props.options.style ? props.options.style : {}),
        color: props.options.focused ? theme.colors.primary : theme.colors.gray,
        marginBottom: -3,
      }}
      {...props}
    />
  );
}

function TabBarLabel(props: any) {
  return (
    <Text
      style={{
        color: props.focused ? theme.colors.primary : theme.colors.gray,
      }}
    >
      {props.children}
    </Text>
  );
}
