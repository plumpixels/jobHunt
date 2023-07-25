import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("user");

  useEffect(() => {
    // Get the user's name from AsyncStorage
    const getName = async () => {
      const nameFromStorage = await AsyncStorage.getItem("name");
      if (nameFromStorage) {
        setName(nameFromStorage);
      }
    };
    getName();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () =>
            <Text style={{ fontFamily: FONT.bold, color: 'red', fontSize: SIZES.xLarge, marginLeft: 0, letterSpacing: 1.5 }}>
              JOBHUNT
            </Text>,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' handlePress={() => {
              console.log("Header button pressed");
              Alert.prompt("Welcome", "Please enter your name", (text) => {
                setName(text);
                console.log(text);
                // Save the user's name to AsyncStorage
                const saveName = async () => {
                  await AsyncStorage.setItem("name", text);
                };
                saveName();
              })
            }}
              />
            ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            name={name}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
