import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  TextInput,
  Switch,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import topImage from "../../../assets/user2.png";

const CoverSection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={topImage}
        style={[StyleSheet.absoluteFillObject, styles.bgImage]}
      >
        <LinearGradient
          style={styles.overlay}
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.4)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 1 }}
          location={[0, 1]}
        >
          <View></View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  bgImage: {
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "red",
    flex: 1,
  },
  overlay: {
    //...StyleSheet.absoluteFillObject,
    //backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 1,
    bottom: 0,
  },
});
export default CoverSection;
