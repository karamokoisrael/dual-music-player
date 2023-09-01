import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../configurations/constants/theme";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";
import PasswordInput from "../../components/PasswordInput";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import TextLink from "../../components/TextLink";
import { RegisterRequest } from "../../../../core/domain/models/auth-model";
import { useAlertStore } from "../../../zustand-store-adapter/alert.store";
import LanguageInput from "../../components/LanguageInput";
import ReferalInput from "../../components/ReferalInput";
import { AuthService } from "../../../../core/application/services";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import SupportSection from "@infrastructure/react-native-adapter/components/SupportSection";
import { TranslationService } from "@infrastructure/react-native-adapter/services/translation.service";
export default function SignUpScreen() {
  const navigation = useNavigation();
  const [loading, setLoadingStatus] = useState(false);
  const [referal, setReferalStatus] = useState(false);
  const { control, handleSubmit } = useForm<RegisterRequest>();
  const { showAlert } = useAlertStore();
  const translationService = new TranslationService();
  const authenticationService = new AuthService(translationService);

  const onSubmit = async (data: RegisterRequest) => {
    setLoadingStatus(true);
    const res = await authenticationService.register({
      ...data,
      language: i18n.locale,
    });

    showAlert(
      res.message as string,
      undefined,
      res.statusCode == 200 ? "primary" : "danger"
    );

    setLoadingStatus(false);

    if (res.statusCode == 200) navigation.navigate("SignIn", data);
  };

  return (
    <SafeAreaView style={tw`flex flex-col w-full items-center`}>
      <ScrollView contentContainerStyle={tw`flex items-center w-90`}>
        <KeyboardAvoidingView style={styles.mainContainer}>
          <Logo />
          <Text style={tw`text-center mb-2`} variant="titleLarge">
            {i18n.t("i_register")}
          </Text>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                label={i18n.t("last_name")}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
            name="lastName"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                label={i18n.t("first_name")}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
            name="firstName"
          />

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

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneNumberInput
                onChangeFormattedText={onChange}
                value={value}
              />
            )}
            name="phone"
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <PasswordInput
                onChangeText={onChange}
                value={value}
                label={i18n.t("password")}
              />
            )}
            name="password"
          />

          {referal ? (
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <ReferalInput onChangeText={onChange} value={value} />
              )}
              name="parentReferalToken"
            />
          ) : (
            <View style={tw`flex flex-row items-center justify-end mt-2`}>
              <TextLink onPress={() => setReferalStatus(true)}>
                {i18n.t("i_have_a_referal_code")}
              </TextLink>
            </View>
          )}

          <Button
            loading={loading}
            style={tw`mt-6 w-[100%] text-center mb-5 self-stretch`}
            mode="contained"
            onPress={handleSubmit(onSubmit)}
          >
            {i18n.t("i_register")}
          </Button>

          <View style={tw`flex flex-row items-center justify-center`}>
            <Text>{i18n.t("already_registered")}</Text>
            <TextLink onPress={() => navigation.navigate("SignIn")}>
              {i18n.t("connect")}
            </TextLink>
          </View>

          <View style={tw`flex flex-row items-center justify-center`}>
            <SupportSection />
            <LanguageInput />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
