import PaymentMethodList from "@infrastructure/react-native-adapter/components/PaymentMethodList";
import { useNavigation } from "@react-navigation/native";
import { useExchangeStore } from "@infrastructure/zustand-store-adapter/exchange.store";
export default function NewTransactionStep1Screen() {
  const exchangeStore = useExchangeStore();
  const navigation = useNavigation();
  return (
    <PaymentMethodList
      slot="transfer"
      onItemSelected={(paymentMethod) => {
        exchangeStore.alterExchangeState({
          transferPaymentMethod: paymentMethod,
        });
        navigation.navigate("NewTransactionStep2");
      }}
    />
  );
}
