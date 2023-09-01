import { FlatList, TouchableOpacity } from "react-native";
import { Badge, IconButton, SegmentedButtons, Text } from "react-native-paper";
import useConfigStore from "@infrastructure/zustand-store-adapter/config.store";
import { View } from "./Themed";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import { useState } from "react";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import theme from "@infrastructure/configurations/constants/theme";
import { WINDOW_WIDTH } from "@infrastructure/configurations/constants/layout";
import { PaymentMethod } from "../../../core/domain/models";
import PaymentMethodIcon from "./PaymentMethodIcon";
const paymentMethodTypes = [
  {
    value: "mobile_money_and_fiat",
    label: i18n.t("mobile_money_and_fiat"),
    icon: "credit-card",
    types: ["mobile_money", "credit_card", "token"],
  },
  {
    value: "cryptocurrency",
    label: i18n.t("cryptocurrency"),
    icon: "bitcoin",
    types: ["crypto"],
  },
];

type Props = {
  slot: "transfer" | "reception";
  onItemSelected: (paymentMethod: PaymentMethod) => void;
};
export default function PaymentMethodList({ slot, onItemSelected }: Props) {
  const paymentMethods = useConfigStore(
    (state) => state.appConfig.paymentMethods
  );

  const [currentType, setCurrentType] = useState("mobile_money_and_fiat");
  return (
    <View style={{ width: WINDOW_WIDTH, ...tw`flex items-center` }}>
      <FlatList
        data={paymentMethods.filter((paymentMethod: PaymentMethod) => {
          let visible = true;

          if (slot == "transfer" && paymentMethod.onlyForReception)
            visible = false;
          if (slot == "reception" && paymentMethod.onlyForTransfer)
            visible = false;

          const types = paymentMethodTypes.find(
            (type) => type.value == currentType
          )?.types;
          if (types != undefined)
            visible = visible && types.includes(paymentMethod.paymentType);

          return visible;
        })}
        ListHeaderComponent={() => (
          <SegmentedButtons
            value={currentType}
            onValueChange={(value) => setCurrentType(value)}
            style={tw`mt-2 mb-2`}
            buttons={paymentMethodTypes}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`w-100 flex items-center`}
            onPress={() => onItemSelected(item)}
          >
            <View
              style={tw`flex flex-row w-95 items-center justify-start bg-[${theme.colors.primaryOpac}] rounded-xl`}
            >
              <PaymentMethodIcon iconUrl={item.iconUrl} />

              <View
                style={tw`flex flex-row items-center justify-between w-70 bg-[${theme.colors.primaryOpac}]`}
              >
                <View
                  style={tw`flex flex-col items-start justify-start bg-[${theme.colors.primaryOpac}]`}
                >
                  <Text variant="bodyMedium" style={tw`font-bold`}>
                    {item.name}
                  </Text>
                  {item.unavailable ? (
                    <Badge style={tw`mt-2 bg-[${theme.colors.warning}]`}>
                      {i18n.t("unavailable")}
                    </Badge>
                  ) : null}
                  {/* <Text>{item.name}</Text> */}
                </View>
                <IconButton icon="arrow-right"></IconButton>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${index}${item.id}`}
      />
    </View>
  );
}
