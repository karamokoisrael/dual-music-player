import { RootStackParamList } from "@infrastructure/react-native-adapter/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Text } from "react-native-paper";
export type NewTransactionStep4ScreenProps = {
  paymentUrl?: string;
};

export default function NewTransactionStep4Screen({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "NewTransactionStep4">) {
  // console.log(props);
  console.log(route);

  return (
    <View>
      <Text>ok</Text>
    </View>
  );
}
