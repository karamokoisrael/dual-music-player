import PaymentMethodList from "@infrastructure/react-native-adapter/components/PaymentMethodList";
import { useNavigation } from "@react-navigation/native";
import { useExchangeStore } from "@infrastructure/zustand-store-adapter/exchange.store";
export default function NewTransactionStep2Screen() {
  const exchangeStore = useExchangeStore();
  const navigation = useNavigation();
  return (
    <PaymentMethodList
      slot="reception"
      onItemSelected={(paymentMethod) => {
        exchangeStore.alterExchangeState({
          receptionPaymentMethod: paymentMethod,
        });
        navigation.navigate("NewTransactionStep3");
      }}
    />
  );
}
