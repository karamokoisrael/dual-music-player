import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function PreLoader() {
  return (
    <View
      style={tw`h-[100%] w-[100%] flex flex-col items-center justify-around`}
    >
      <ActivityIndicator />
    </View>
  );
}
