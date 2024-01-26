import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Icons from "./Icons";
import moment from "moment";
import "moment/locale/tr";
import { Link } from "expo-router";

type Card = {
  id: string;
  title: string;
  author: string;
  version: string;
  date: Date;
};
export default function Card({ id, title, author, version, date }: Card) {
  return (
    <Link className="w-48 h-42 m-1" href={`/Code/${id}`}>
      <ImageBackground
        resizeMode="stretch"
        className="flex m-1 items-start p-4 w-48 h-auto rounded-2xl relative"
        source={require("@assets/card.png")}
      >
        {/* <LinearGradient
        colors={["#005939", "transparent"]}
        className="w-48 h-40 items-start p-4 rounded-2xl "
      > */}
        <View className="justify-evenly flex w-full h-full relative">
          <View className="py-2">
            <Text className="text-white" style={{ fontFamily: "MBold" }}>
              {title.length > 14 ? title.substring(0, 14) + "..." : title}
            </Text>
          </View>

          <View className="gap-1 flex">
            <View className="w-40 bg-[#005939] p-1 rounded-lg text-[4px]  flex flex-row items-center justify-start space-x-1">
              <Icons.Person />
              <Text
                className="text-[#00FFA3]/50"
                style={{ fontFamily: "MRegular", fontSize: 10 }}
              >
                {author.startsWith("Deleted")
                  ? "RabeL Code"
                  : author.length > 16
                  ? author.substring(0, 16)
                  : author}
              </Text>
            </View>
            <View className="w-40 bg-[#005939] p-1 rounded-lg text-[4px]  flex flex-row items-center justify-start space-x-1">
              <Icons.Box />
              <Text
                className="text-[#00FFA3]/50"
                style={{ fontFamily: "MRegular", fontSize: 10 }}
              >
                {version}
              </Text>
            </View>
            <View className="w-40 bg-[#005939] p-1 rounded-lg text-[4px]  flex flex-row items-center justify-start space-x-1">
              <Icons.Clock />
              <Text
                className="text-[#00FFA3]/50"
                style={{ fontFamily: "MRegular", fontSize: 10 }}
              >
                {moment(date).format("D MMMM YYYY")}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Link>
  );
}
