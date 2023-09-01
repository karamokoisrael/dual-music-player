/* eslint-disable @typescript-eslint/ban-ts-comment */
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

const _fontConfig = {
  regular: {
    fontFamily: "Global-Font",
    fontWeight: "normal",
  },
  medium: {
    fontFamily: "Global-Font",
    fontWeight: "normal",
  },
  light: {
    fontFamily: "Global-Font",
    fontWeight: "normal",
  },
  thin: {
    fontFamily: "Global-Font",
    fontWeight: "normal",
  },
};

const fontConfig = {
  // web: _fontConfig,
  // ios: _fontConfig,
  // android: _fontConfig,
  default: _fontConfig,
};

export const theme = {
  // @ts-ignore
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: tw.color("bg-gray-100"),
    onBackground: tw.color("bg-gray-100"),
    onbb: tw.color("bg-gray-100"),
    primary: "#9a5925",
    primaryOpac: tw.color("text-amber-700"),
    secondary: "#9a5925",
    secondaryOpac:  tw.color("text-amber-700"),
    tertiary: tw.color("text-amber-700"),
    headerControls: "#fff",
    primary10: "#ea2325",
    success: "#28a745",
    warning: "#ffc107",
    info: "#17a2b8",
    gray: "#6c757d",
    danger: "#dc3545",
    dark: "#343a40",
    light: "#f8f9fa",
    white: "#fff",
    chip: "#ebdefa",
    transparent: "#fff0",
    inputBottom: "#959199",
  },
  // @ts-ignore
  fonts: configureFonts(fontConfig),
};

export const lightTheme = {
  dark: false,
  colors: {
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.primary,
    text: theme.colors.headerControls,
    border: theme.colors.transparent,
    notification: theme.colors.primary,
    tint: theme.colors.headerControls,
    headerTintColor: theme.colors.headerControls,
  },
};

export const darkTheme = {
  // dark: true,
  dark: false,
  colors: {
    ...lightTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.background,
    text: theme.colors.headerControls,
    border: theme.colors.dark,
    notification: theme.colors.primary,
  },
};

// const tintColorLight = '#2f95dc';
// const tintColorDark = '#fff';

// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     tint: tintColorLight,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     tint: tintColorDark,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorDark,
//   },
// };

export default theme;
