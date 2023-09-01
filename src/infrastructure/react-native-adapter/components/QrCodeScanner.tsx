import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import tw from "@infrastructure/react-native-adapter/styles/tailwind";

type PermissionStatus = "allowed" | "denied" | "pending";
type Props = {
  onChange: (value: ScanResult) => void;
};

type ScanResult = { type: any; data: any };
export default function QrCodeScanner({ onChange }: Props) {
  const [hasPermission, setHasPermission] =
    useState<PermissionStatus>("pending");
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted" ? "allowed" : "denied");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = (scanResult: ScanResult) => {
    setScanned(true);
    onChange(scanResult);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...tw`w-100 h-100`,
  },
});
