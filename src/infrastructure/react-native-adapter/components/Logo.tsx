import tw from "@infrastructure/react-native-adapter/styles/tailwind";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
export default function Logo() {
  return (
    <View style={tw`flex flex-col items-center w-full`}>
      <Image
        style={{ ...styles.image, ...tw`w-[160px] h-[160px]` }}
        source={require("../../../../assets/images/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
  },
});
