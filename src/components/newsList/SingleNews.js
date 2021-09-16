import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import image1 from "../../../assets/user2.png";

const SingleNews = ({ navigator, article }) => {
  const date = new Date(article.publishedAt);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.headerText}>{article.title}</Text>
        <Text
          style={{
            fontSize: 17,
            marginTop: 5,
            color: "#631a63",
          }}
        >
          {article.author ? article.author : "Anonymous"}
        </Text>
        <Text
          style={{
            paddingTop: 14,
            color: "#631a63",
          }}
        >
          Updated {date.toLocaleString()}
        </Text>
      </View>
      {article.urlToImage && (
        <View style={{ marginTop: 30 }}>
          <Image
            source={{ uri: article.urlToImage }}
            style={{
              width: "100%",
              height: 250,
            }}
          />
        </View>
      )}
      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <Text style={{ fontSize: 18, color: "#631a63" }}>
          {article.content}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    // width: 300,
  },
});

const mapStateToProps = (state) => {
  return {
    article: state.news.singleNews,
  };
};
export default connect(mapStateToProps)(SingleNews);
