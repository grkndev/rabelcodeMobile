/// <reference types="nativewind/types" />
import { View, Text, ImageBackground, Image } from "react-native";
import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function _layout() {
  const [fontLoaded, fonterr] = useFonts({
    MThin: Montserrat_100Thin,
    MLight: Montserrat_300Light,
    MRegular: Montserrat_400Regular,
    MSemi: Montserrat_600SemiBold,
    MBold: Montserrat_700Bold,
    MExBold: Montserrat_800ExtraBold,
    MBlack: Montserrat_900Black,
  });
  useEffect(() => {
    if (fontLoaded || fonterr) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fonterr]);
  if (!fontLoaded && !fonterr) {
    return null;
  }
  return (
    <View>
      <ImageBackground
        style={{ height: "100%" }}
        source={require("@assets/rabelcodeBg.jpg")}
      >
        <SafeAreaView>
          <Image
            className="h-16 w-16 self-center"
            source={require("@assets/rabelgreen.png")}
          />
          <Slot />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
