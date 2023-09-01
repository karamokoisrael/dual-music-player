import { ScrollView, View } from "react-native";
import { TextInput, Text, ActivityIndicator, Button } from "react-native-paper";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import { useExchangeStore } from "@infrastructure/zustand-store-adapter/exchange.store";
import { CurrencyService } from "../../../../core/application/services";
import { useUserStore } from "@infrastructure/zustand-store-adapter/user.store";
import useConfigStore from "@infrastructure/zustand-store-adapter/config.store";
import { FontAwesome } from "@expo/vector-icons";
import PaymentMethodIcon from "@infrastructure/react-native-adapter/components/PaymentMethodIcon";
import theme from "@infrastructure/configurations/constants/theme";
import { ExchangeService } from "../../../../core/application/services/exchange.service";
import { useEffect, useRef, useState } from "react";
import {
  CalculateResponse,
  ExchangeRequest,
} from "../../../../core/domain/models";
import { initialTransactionComputationOutputMock } from "../../../../core/application/mocks";
import { useAlertStore } from "@infrastructure/zustand-store-adapter/alert.store";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import AddressInput from "@infrastructure/react-native-adapter/components/AddressInput";
import { TranslationService } from "@infrastructure/react-native-adapter/services/translation.service";
export default function NewTransactionStep3Screen() {
  const exchange = useExchangeStore((state) => state.exchange);
  const exchangeStore = useExchangeStore();
  const userStore = useUserStore();
  const appConfig = useConfigStore().appConfig;
  const translationService = new TranslationService();
  const currencyService = new CurrencyService(
    translationService,
    userStore.user,
    appConfig
  );
  const exchangeService = new ExchangeService(
    translationService,
    userStore.user,
    appConfig
  );
  const { showAlert, hideAlert } = useAlertStore();
  const computationTimestamp = useRef(new Date());
  const [stateToggler, setStateTogglerValue] = useState(new Date());
  const [computationOutput, setComputationOutput] = useState<CalculateResponse>(
    initialTransactionComputationOutputMock
  );

  const navigation = useNavigation();
  const exchangeForm = useRef<ExchangeRequest>({
    transferPaymentMethodId: 1,
    receptionPaymentMethodId: 2,
    transferData: "",
    receptionData: "",
    transferAmount: "",
    memo: null,
  });

  const init = async () => {
    // const dataRes = await dataProvider.getListWithPagination(
    //   context,
    //   "Wallet",
    //   { pagination: { page: 1, perPage: 10000 } }
    // );
    // setWallets(dataRes.list);
  };

  const refresh = (date = null) => {
    setStateTogglerValue(date == null ? new Date() : date);
  };

  const displayCurrency = (currency: string) => {
    if (currency == "USER")
      return currencyService.formatPrice(0).replace("0", "");
    return currency;
  };

  const [loading, setLoadingStatus] = useState(false);

  const calculate = async () => {
    hideAlert();
    setLoadingStatus(true);
    const timestamp = new Date();
    computationTimestamp.current = timestamp;
    if (exchangeForm.current.transferAmount == "") {
      setLoadingStatus(false);
      return;
    }
    const currentAmount: number = parseFloat(
      exchangeForm.current.transferAmount as any
    );
    if (currentAmount == 0) {
      setLoadingStatus(false);
      return;
    }
    if (isNaN(currentAmount)) {
      setLoadingStatus(false);
      return;
    }
    const res = await exchangeService.caculate({
      transferPaymentMethodId: exchange.transferPaymentMethod.id,
      receptionPaymentMethodId: exchange.receptionPaymentMethod.id,
      transferAmount: currentAmount,
    });
    if (res.statusCode != 200) {
      if (computationTimestamp.current.getTime() == timestamp.getTime()) {
        showAlert(
          res.message
            ? res.message
            : i18n.t(
                "we_encountered_an_unexpected_error_during_the_operation_check_your_internet_connection_and_try_again"
              ),
          undefined,
          res.statusCode == 200 ? "primary" : "danger"
        );
      }
    } else {
      if (computationTimestamp.current.getTime() == timestamp.getTime()) {
        setComputationOutput(res.data as any);
      }
    }
    setLoadingStatus(false);
  };

  const handleExchange = async () => {
    hideAlert();
    setLoadingStatus(true);
    console.log(exchangeForm.current);

    const res = await exchangeService.exchange(exchangeForm.current);
    if (res.statusCode != 200) {
      showAlert(
        res.message
          ? res.message
          : i18n.t(
              "we_encountered_an_unexpected_error_during_the_operation_check_your_internet_connection_and_try_again"
            ),
        undefined,
        res.statusCode == 200 ? "primary" : "danger"
      );
      setLoadingStatus(false);
      return;
    }

    exchangeStore.alterCheckoutState({
      exchange,
      details: res.data,
    });

    showAlert(i18n.t("operation_successful_you_will_be_redirected"));
    exchangeForm.current = { ...exchangeForm.current, transferAmount: 0 };
    setComputationOutput({
      ...computationOutput,
      receptionAmount: 0,
      convertedReceptionAmount: 0,
      convertedTaxes: 0,
      convertedReceptionTaxes: 0,
      convertedTransferAmount: 0,
      convertedTransferTaxes: 0,
    });
    refresh();
    setTimeout(() => {
      if (
        !res.data ||
        res.data.proceedLink == null ||
        res.data.proceedLink == undefined
      ) {
        showAlert(
          res.message
            ? res.message
            : i18n.t(
                "we_encountered_an_unexpected_error_during_the_operation_check_your_internet_connection_and_try_again"
              ),
          undefined,
          "danger"
        );
        return;
      }

      navigation.navigate("NewTransactionStep4", {
        paymentUrl: res.data.proceedLink.includes("http")
          ? res.data.proceedLink
          : undefined,
      });
    }, 3000);

    setLoadingStatus(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ScrollView>
      <View style={tw`w-100 flex items-center mt-5`}>
        <View style={tw`flex flex-row items-center justify-between mb-2`}>
          <PaymentMethodIcon iconUrl={exchange.transferPaymentMethod.iconUrl} />
          {loading ? (
            <ActivityIndicator size={35} animating={true} />
          ) : (
            <FontAwesome size={35} name="arrow-right" />
          )}

          <PaymentMethodIcon
            iconUrl={exchange.receptionPaymentMethod.iconUrl}
          />
        </View>

        <View style={tw`flex flex-col items-center justify-between`}>
          <Text style={tw`text-2xl text-[#444] font-semibold`}>
            {i18n.t("enter_the_amount")} (
            {displayCurrency(exchange.transferPaymentMethod.currency)})
          </Text>
          <TextInput
            mode="flat"
            defaultValue="0"
            style={{ backgroundColor: "transparent", fontSize: 40 }}
            keyboardType="numeric"
            onChangeText={(value) => {
              exchangeForm.current = {
                ...exchangeForm.current,
                transferAmount: value.replace(",", "."),
              };
              calculate();
            }}
          />
        </View>
        <View
          style={tw`flex flex-col items-center justify-between p-2 mt-5 bg-[${theme.colors.primaryOpac}] w-90 rounded-lg`}
        >
          <Text style={tw`text-[#444]`}>
            {i18n.t("transfer_fees")}
            {`: `}
            {currencyService.formatPrice(
              computationOutput.convertedTransferTaxes || 0
            )}
          </Text>
          <Text style={tw`text-[#444]`}>
            {i18n.t("reception_fees")}
            {`: `}
            {currencyService.formatPrice(
              computationOutput.convertedReceptionTaxes || 0
            )}
          </Text>
          <Text style={tw`text-[#444]`}>
            {i18n.t("total_fees")}
            {`: `}
            {((param1, param2, context) => {
              const first = (param1 || 0) as number;
              const second = (param2 || 0) as number;
              return currencyService.formatPrice(first + second);
            })(
              computationOutput.convertedTransferTaxes,
              computationOutput.convertedReceptionTaxes
            )}
          </Text>
          <Text style={tw`text-xl text-[#444] font-semibold`}>
            {i18n.t("reception_amount")}
            {`: `}
            {exchange.receptionPaymentMethod.currency == "USER"
              ? currencyService.formatPrice(
                  computationOutput.convertedReceptionAmount
                )
              : `${computationOutput.convertedReceptionAmount} ${exchange.receptionPaymentMethod.currency}`}
          </Text>
        </View>
        <View style={tw`flex flex-col items-center justify-between`}>
          <AddressInput
            slot="transfer"
            paymentMethod={exchange.transferPaymentMethod}
            onChangeText={(value) => {
              exchangeForm.current = {
                ...exchangeForm.current,
                transferData: value,
              };
            }}
          />
          <AddressInput
            slot="reception"
            paymentMethod={exchange.receptionPaymentMethod}
            onChangeText={(value) => {
              exchangeForm.current = {
                ...exchangeForm.current,
                receptionData: value,
              };
            }}
          />
        </View>

        <View style={tw`flex flex-col items-center justify-between`}>
          <Button
            loading={loading}
            disabled={loading}
            style={tw`mt-6 w-80 text-center mb-5 self-stretch`}
            mode="contained"
            onPress={() => handleExchange()}
          >
            {i18n.t("exchange")}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
