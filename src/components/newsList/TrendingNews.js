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
  Image,
} from "react-native";
import fire from "../../../assets/fire.png";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import topImage from "../../../assets/user2.png";
import NewsCard from "../../utils/NewsCard";

const TrendingNews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trending News</Text>
      {[1, 2, 3, 4, 5].map(() => (
        <NewsCard />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "600",
  },
});

export default TrendingNews;
