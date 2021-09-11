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
  ScrollView,
} from "react-native";
import CoverSection from "./CoverSection";
import TrendingNews from "./TrendingNews";

const NewsList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CoverSection />
        <TrendingNews />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
});
export default NewsList;
