import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        style={{ height: "100%" }}
        source={require("../assets/rabelcodeBg.jpg")}
      >
        <SafeAreaView>
          <Slot />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
