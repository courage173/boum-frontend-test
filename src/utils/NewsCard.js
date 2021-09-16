import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import fire from "../../assets/fire.png";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import noImage from "../../assets/no-image-available.jpeg";

const NewsCard = ({ article, handlePress, handleLike }) => {
  return (
    <Pressable style={{ marginTop: 20 }} onPress={() => handlePress(article)}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "700",
            }}
          >
            CNN News
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 17, opacity: 0.6 }}>2h</Text>
          <Image
            source={fire}
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#fff",
              marginLeft: 5,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => handleLike(article.id)}>
            {article.liked ? (
              <MaterialCommunityIcons
                name="heart-multiple"
                size={30}
                color="#631a63"
                style={{ opacity: 0.5, marginRight: 10 }}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                size={30}
                color="#631a63"
                style={{ opacity: 0.5, marginRight: 10 }}
              />
            )}
          </Pressable>
          <Text
            style={{
              marginRight: 10,
              fontSize: 17,
              opacity: 0.6,
            }}
          >
            {article.likedCount}
          </Text>
          <Entypo name="dots-three-horizontal" size={24} color="#631a63" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              width: 200,
              lineHeight: 30,
            }}
          >
            {article.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <View
              style={{
                padding: 5,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: "#fff",
                marginRight: 10,
                borderRadius: 20,
              }}
            >
              <Text>Finance</Text>
            </View>
            <View
              style={{
                padding: 5,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: "#fff",
                marginLeft: 10,
                borderRadius: 20,
              }}
            >
              <Text>Technology</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 13,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                marginRight: 5,
                color: "#631a63",
                paddingLeft: 5,
                fontSize: 17,
              }}
            >
              PTSK,
            </Text>
            <Text
              style={{
                fontWeight: "500",
                marginRight: 5,
                color: "#631a63",
                fontSize: 17,
              }}
            >
              FLTW,
            </Text>
            <View>
              <Text
                style={{ fontWeight: "500", color: "#631a63", fontSize: 17 }}
              >
                2 more
              </Text>
            </View>
          </View>
        </View>
        <View>
          {article.urlToImage ? (
            <Image
              source={{ uri: article.urlToImage }}
              style={{
                height: 135,
                width: 130,
                borderRadius: 10,
              }}
            />
          ) : (
            <Image
              source={noImage}
              style={{
                height: 135,
                width: 130,
                borderRadius: 10,
              }}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
export default NewsCard;
