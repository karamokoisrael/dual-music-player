import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../configurations/constants/theme";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";
import TextLink from "../../components/TextLink";
import { useAlertStore } from "../../../zustand-store-adapter/alert.store";
import { AuthService } from "../../../../core/application/services";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import { TranslationService } from "@infrastructure/react-native-adapter/services/translation.service";

export default function PasswordForgottenScreen() {
  const navigation = useNavigation();
  const translationService = new TranslationService();
  const authenticationService = new AuthService(translationService);
  const [loading, setLoadingStatus] = useState(false);
  const { control, handleSubmit } = useForm<any>();
  const { showAlert } = useAlertStore();
  const onSubmit = async (data: any) => {
    setLoadingStatus(true);
    const res = await authenticationService.passForgotten(data);
    showAlert(
      res?.message as string,
      undefined,
      res.statusCode == 200 ? "primary" : "danger"
    );
    setLoadingStatus(false);
  };

  return (
    <SafeAreaView style={tw`flex flex-col w-full items-center`}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Logo />
        <Text style={tw`text-center mb-2`} variant="titleLarge">
          {i18n.t("reset_my_password")}
        </Text>

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
            />
          )}
          name="email"
        />

        <Button
          loading={loading}
          style={tw`mt-6 w-[100%] text-center mb-5 self-stretch`}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          {i18n.t("reset_my_password")}
        </Button>

        <Text style={tw`text-center mb-2`}>{i18n.t("you_did_remember")}</Text>
        <TextLink
          style={tw`text-center mb-2`}
          onPress={() => navigation.navigate("SignIn")}
        >
          {i18n.t("login")}
        </TextLink>
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
