import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View>
      <Link href={"/(screens)/Code"}>
        <Text className="text-white">index</Text>
      </Link>

      <Link href={"/(screens)/Code/34asadcs23"}>
        <Text className="text-white">Code</Text>
      </Link>
    </View>
  );
}
