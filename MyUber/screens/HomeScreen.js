import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-web";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View></View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
