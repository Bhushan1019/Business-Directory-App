import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function About({ business }) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
        // height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        About
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          //   fontSize: 20,
          lineHeight: 25,
        }}
      >
        {business?.about}
      </Text>
    </View>
  );
}
