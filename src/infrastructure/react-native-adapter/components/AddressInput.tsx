import { PaymentMethod } from "../../../core/domain/models";
import { Text } from "react-native-paper";
import { View } from "react-native";
import PhoneNumberInput from "./PhoneNumberInput";
import { useState } from "react";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
type Props = {
  slot: "transfer" | "reception";
  paymentMethod: PaymentMethod;
  onChangeText: (value: string) => void;
};

const AddressInputWrapper = ({
  slot,
  children,
}: Props & { children: JSX.Element[] | JSX.Element }) => {
  return (
    <View
      style={tw`flex flex-col items-center justify-around p-2 mt-2 w-100 rounded-lg`}
    >
      <Text style={tw`text-xl text-[#444]`}>
        {i18n.t(slot == "transfer" ? "transfer_address" : "reception_address")}
      </Text>
      {children}
    </View>
  );
};
export default function AddressInput(props: Props) {
  const { slot, paymentMethod, onChangeText } = props;
  const [value, setValue] = useState("");
  if (slot == "transfer" && !paymentMethod.transferPlaceholderRequired)
    return null;

  switch (paymentMethod.paymentType) {
    case "crypto":
      return (
        <AddressInputWrapper {...props}>
          <Text>Crypto</Text>
        </AddressInputWrapper>
      );
    case "credit_card":
      return null as any;
      break;
    case "mobile_money":
      return (
        <AddressInputWrapper {...props}>
          <PhoneNumberInput
            onChangeFormattedText={(value) => {
              setValue(value);
              onChangeText(value);
            }}
            value={value}
            // defaultValue={params?.phone ? params.phone : undefined}
          />
        </AddressInputWrapper>
      );
    case "token":
      <AddressInputWrapper {...props}>
        <Text>Token</Text>
      </AddressInputWrapper>;
      break;
    default:
      return null as any;
      break;
  }
}
