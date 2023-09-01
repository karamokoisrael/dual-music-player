import React from "react";
import PhoneInput, { PhoneInputProps } from "react-native-phone-number-input";
import theme from "../../configurations/constants/theme";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import i18n from "@infrastructure/react-native-adapter/helpers/globalization.helper";
type Props = PhoneInputProps;

const PhoneNumberInput = React.forwardRef((props: Props, ref?: any) => {
  return (
    <PhoneInput
      ref={ref}
      defaultCode="CI"
      layout="first"
      containerStyle={tw`p-1 mb-2 mt-2 border-b-[1.5px] border-[${theme.colors.inputBottom}] bg-[${theme.colors.primaryOpac}] w-full`}
      textContainerStyle={tw`bg-[${theme.colors.primaryOpac}]`}
      placeholder={i18n.t("phone_number")}
      {...props}
    />
  );
});

export default PhoneNumberInput;
