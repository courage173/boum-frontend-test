import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, StyleSheet } from "react-native";
import topImage from "../../../assets/user2.png";
import NewsCard from "../../utils/NewsCard";
import { addNewsToStore, likeArticle } from "../../redux/action/news";

const TrendingNews = ({ news, addNewsToStore, navigation, likeArticle }) => {
  const newsList = news.articles;
  const handlePress = (payload) => {
    addNewsToStore(payload);
    navigation.push("singlenews");
  };
  const handleLike = (payload) => {
    likeArticle(payload);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trending News</Text>
      {newsList &&
        newsList.map((article, i) => {
          if (article.content && article.title) {
            return (
              <NewsCard
                key={i}
                article={article}
                handlePress={handlePress}
                handleLike={handleLike}
              />
            );
          }
        })}
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addNewsToStore, likeArticle }, dispatch);

export default connect(null, mapDispatchToProps)(TrendingNews);
