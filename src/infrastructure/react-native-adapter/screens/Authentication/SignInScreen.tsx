import React, { useEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../configurations/constants/theme";
import Logo from "../../components/Logo";
import PasswordInput from "../../components/PasswordInput";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import TextLink from "../../components/TextLink";
import { useAlertStore } from "../../../zustand-store-adapter/alert.store";
import { LoginRequest, LoginResponse } from "../../../../core/domain/models";
import { useUserStore } from "@infrastructure/zustand-store-adapter/user.store";
import { AuthService } from "../../../../core/application/services";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import LanguageInput from "@infrastructure/react-native-adapter/components/LanguageInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@infrastructure/react-native-adapter/navigation/types";
import SupportSection from "@infrastructure/react-native-adapter/components/SupportSection";
import { useLayoutStore } from "@infrastructure/zustand-store-adapter/layout.store";
import { TranslationService } from "@infrastructure/react-native-adapter/services/translation.service";
export type SignInScreenProps =
  | {
      email?: string;
      phone?: string;
      password: string;
    }
  | undefined;

export default function SignInScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignIn">) {
  // const params = route.params;
  const translationService = new TranslationService();
  const authenticationService = new AuthService(translationService);
  const [segmentValue, setSegmentValue] = useState("mobile");
  const [loading, setLoadingStatus] = useState(false);
  const { control, handleSubmit, setValue } = useForm<LoginRequest>();
  const { showAlert } = useAlertStore();
  const userStore = useUserStore();
  const termsAndConditionsAccepted = useLayoutStore(
    (state) => state.termsAndConditionsAccepted
  );

  useEffect(() => {
    if (!termsAndConditionsAccepted) navigation.navigate("TermsAndConditions");
  }, [termsAndConditionsAccepted]);
  const onSubmit = async (data: LoginRequest) => {
    setLoadingStatus(true);
    const res = await authenticationService.login({ ...data, code: "" });
    if (res.message) {
      showAlert(
        res.message,
        undefined,
        res.statusCode == 200 ? "primary" : "danger"
      );
    } else {
      // showAlert(
      //   i18n.t("connection_successful_you_will_soon_be_redirected"),
      //   undefined,
      //   "success"
      // );
      userStore.setUser(res.data as LoginResponse);
      navigation.navigate("Home");
    }
    setLoadingStatus(false);
  };

  return (
    <SafeAreaView style={tw`flex flex-col w-full items-center`}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Logo />
        <Text style={tw`text-center mb-2`} variant="titleLarge">
          {i18n.t("i_login")}
        </Text>
        <SegmentedButtons
          value={segmentValue}
          onValueChange={(value) => {
            setValue("email", undefined);
            setValue("phone", undefined);
            setSegmentValue(value);
          }}
          style={tw`mt-2 mb-2`}
          buttons={[
            {
              value: "mobile",
              label: i18n.t("mobile"),
              icon: "phone",
            },
            {
              value: "train",
              label: i18n.t("email"),
              icon: "email",
            },
          ]}
        />
        {segmentValue == "mobile" ? (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneNumberInput
                onChangeFormattedText={onChange}
                value={value}
                // defaultValue={params?.phone ? params.phone : undefined}
              />
            )}
            name="phone"
          />
        ) : (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                left={<TextInput.Icon icon={"email"} />}
                style={styles.input}
                label={i18n.t("email")}
                autoCapitalize="none"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                // defaultValue={params?.email ? params.email : undefined}
              />
            )}
            name="email"
          />
        )}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              onChangeText={onChange}
              value={value}
              label={i18n.t("password")}
              // defaultValue={params?.password ? params.password : undefined}
            />
          )}
          name="password"
        />

        <Button
          loading={loading}
          style={tw`mt-6 w-[100%] text-center mb-5 self-stretch`}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          {i18n.t("login")}
        </Button>

        <TextLink
          style={tw`text-center mb-2`}
          onPress={() => navigation.navigate("PasswordForgotten")}
        >
          {i18n.t("password_forgotten")}
        </TextLink>

        <View style={tw`flex flex-row items-center justify-center`}>
          <Text>{i18n.t("not_yet_registered")}</Text>
          <TextLink onPress={() => navigation.navigate("SignUp")}>
            {i18n.t("i_create_my_account")}
          </TextLink>
        </View>
        <View style={tw`flex flex-row items-center justify-center`}>
          <SupportSection />
          <LanguageInput />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
  },
  input: {
    ...tw`mb-2 mt-2`,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 6,
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },

  signInMethod: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: theme.colors.secondary,
  },
  signInMethodText: {
    paddingRight: 20,
    marginRight: 20,
  },
});
