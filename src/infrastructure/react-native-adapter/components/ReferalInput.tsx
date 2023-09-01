import React from "react";
import { StyleSheet } from "react-native";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import { TextInput } from "react-native-paper";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
// import QrCodeScanner from "./QrCodeScanner";
type Props = {
  onChangeText: (value: string) => void;
  value?: string;
};

const ReferalInput = React.forwardRef((props: Props, ref?: any) => {
  return (
    <>
      <TextInput
        ref={ref}
        // right={<TextInput.Icon icon={"qrcode"} />}
        left={<TextInput.Icon icon={"account"} />}
        style={styles.input}
        label={i18n.t("referal_token")}
        autoCapitalize="none"
        placeholder={i18n.t("optional")}
        {...props}
      />
      {/* <QrCodeScanner onChange={({ type, data
        }) => {
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        // }} /> */}
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    ...tw`mb-2 mt-2`,
  },
});
export default ReferalInput;
