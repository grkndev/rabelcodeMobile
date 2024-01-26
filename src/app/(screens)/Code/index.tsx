import Card from "@/components/Card";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Icons from "@/components/Icons";

type Code = {
  name: string;
  id: string;
  version: string;
  username: string;
  date: Date;
};
export default function Page() {
  const [data, setData] = useState<Code[] | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(2);
  const [isLoading, setLoading] = useState<boolean>(false);
  const listRef = useRef<FlashList<Code>>(null);
  async function getData(fetchPage: number) {
    // if (page === maxPage) return;
    setLoading(true);
    // setData([]);
    // console.warn(`Curr Page: ${fetchPage}`);
    const res = await axios.get(
      "https://api.rabelland.net/normal?page=" + fetchPage,
      {
        withCredentials: true,
      }
    );
    // console.log(res.data);
    setMaxPage(res.data.pageCount);
    setPage(fetchPage);
    setData(res.data.data);
    listRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
    // if (res.data.data && res.data.data.length > 0) {
    //   setData((old) => {
    //     const newData = old ? [...old] : [];
    //     res.data.data.forEach((item: any) => {
    //       if (!newData.some((existingItem) => existingItem.id === item.id)) {
    //         newData.push(item);
    //       }
    //     });
    //     return newData;
    //   });
    // }

    // console.log("Data reached: ", res.data.data.length);

    setLoading(false);
  }
  useEffect(() => {
    getData(1);
  }, []);

  return (
    <View
      className=""
      style={{
        height: Dimensions.get("screen").height - 2 * 64,
        width: Dimensions.get("screen").width,
      }}
    >
      <StatusBar style="light" />
      <StatusBar style="light" />

      <FlashList
        data={data}
        ListFooterComponent={() => (
          <View className="p-4">
            <View className="flex flex-row gap-x-3 justify-center">
              {/* ÖNCEKİ */}
              {page !== 1 && !isLoading && (
                <Pressable
                  onPress={() => {
                    if (isLoading || page === 1) return;

                    getData(page - 1);
                  }}
                  className="bg-yesil/50 flex justify-center items-center py-2 px-4 rounded"
                >
                  <Text
                    className="text-white text-xl"
                    style={{ fontFamily: "MSemi" }}
                  >
                    <Icons.ArrowBack />
                  </Text>
                </Pressable>
              )}

              {/* ŞUANKİ */}
              <View className="bg-yesil flex justify-center items-center py-2 px-6 rounded">
                <Text
                  className="text-white text-xl"
                  style={{ fontFamily: "MSemi" }}
                >
                  {isLoading ? (
                    <ActivityIndicator color={"#fff"} size={24} />
                  ) : (
                    page
                  )}
                </Text>
              </View>

              {/* SIRADAKİ */}
              {page !== maxPage && !isLoading && (
                <Pressable
                  onPress={() => {
                    if (isLoading) return;
                    getData(page + 1);
                  }}
                  className="bg-yesil/50 flex justify-center items-center py-2 px-4 rounded"
                >
                  <Text
                    className="text-white text-xl"
                    style={{ fontFamily: "MSemi" }}
                  >
                    <Icons.Arrow />
                  </Text>
                </Pressable>
              )}
            </View>
            {/* {isLoading && <ActivityIndicator color={"#005939"} size={36} />} */}
          </View>
        )}
        ListEmptyComponent={() =>
          isLoading ? (
            <Text className="text-white self-center">Loading</Text>
          ) : (
            <Text className="text-white self-center">No Any Datas</Text>
          )
        }
        ref={listRef}
        estimatedItemSize={14}
        numColumns={2}
        centerContent={true}
        contentContainerStyle={{ padding: 10 }}
        className="justify-center flex items-center"
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: Code }) => (
          <Card
            id={item.id}
            title={
              item.name.charAt(0).toUpperCase() +
              item.name.slice(1).toLowerCase()
            }
            version={item.version ? `Discord.JS ${item.version}` : `Discord.JS`}
            date={new Date()}
            author={item.username}
          />
        )}
      />
    </View>
  );
}
