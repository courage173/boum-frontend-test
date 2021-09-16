import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import noImage from "../../../assets/no-image-available.jpeg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addNewsToStore, likeArticle } from "../../redux/action/news";

const CoverSection = ({
  article,
  handlePress,
  addNewsToStore,
  likeArticle,
}) => {
  return (
    <Pressable style={styles.container} onPress={() => addNewsToStore(article)}>
      <ImageBackground
        source={
          article && article.urlToImage ? { uri: article.urlToImage } : noImage
        }
        style={[StyleSheet.absoluteFillObject, styles.bgImage]}
      >
        <LinearGradient
          style={styles.overlay}
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.4)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 1 }}
          location={[0, 1]}
        >
          <View
            style={{
              justifyContent: "center",
              height: "100%",
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 100,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>CNN News</Text>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 17,
                }}
              >
                2h
              </Text>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginTop: 20,
              }}
            >
              {article && article.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
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
                    marginRight: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text>Technology</Text>
                </View>
              </View>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => likeArticle(article?.id)}
              >
                {article?.liked ? (
                  <MaterialCommunityIcons
                    name="heart-multiple"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-multiple-outline"
                    size={30}
                    color="#fff"
                    style={{ marginRight: 10 }}
                  />
                )}
                <Text style={{ color: "#fff", fontSize: 18 }}>
                  {article?.likedCount}
                </Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
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
    borderRadius: 20,
  },
  overlay: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    bottom: 0,
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addNewsToStore, likeArticle }, dispatch);
export default connect(null, mapDispatchToProps)(CoverSection);
