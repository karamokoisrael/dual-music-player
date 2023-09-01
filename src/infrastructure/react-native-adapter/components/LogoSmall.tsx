import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
export default function LogoSmall() {
  return (
    <Image
    style={{ ...styles.image, ...tw`w-[58px] h-[58px]` }}
    source={require("../../../../assets/images/logo.png")}
  />
  );
}


const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
  },
});
