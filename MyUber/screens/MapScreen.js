import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import MapView from "react-native-maps";
import React from "react";
import tw from "tailwind-react-native-classnames";
const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
