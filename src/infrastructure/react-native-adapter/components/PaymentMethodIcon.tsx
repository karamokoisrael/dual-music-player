import { env } from "@infrastructure/configurations/constants/environment";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import { Image } from "react-native";
type Props = {
  iconUrl: string;
};
export default function PaymentMethodIcon({ iconUrl }: Props) {
  return (
    <Image
      style={tw`h-16 w-16 rounded-sm mr-2`}
      source={{
        uri: `${env.apiUrl}/Assets/img/icons/payment-methods${iconUrl.replace(
          ".svg",
          ".png"
        )}`,
      }}
    />
  );
}
