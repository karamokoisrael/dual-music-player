import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import { TextProps, Text } from "react-native-paper";
import theme from "@infrastructure/configurations/constants/theme";
type Props = TextProps & {
  style?: TextStyle;
};

export default function TextLink(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={{ ...styles.link, ...((props.style ? props.style : {}) as any) }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
