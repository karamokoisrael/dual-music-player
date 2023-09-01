import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import { View } from "./Themed";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  style?: StyleSheet;
};
export default function Center(props: Props) {
  const { children } = props;
  return (
    <View style={{ ...styles.container, ...(props.style ? props.style : {}) }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...tw`flex flex-col items-center justify-between bg-red-500 w-full`,
    // flexDirection: 'column',
    // justifyContent: "space-between",
    // alignItems: "center",
    // width: "100%",
    padding: 0,
    margin: 0,
    // backgroundColor: "red"
  },
});
