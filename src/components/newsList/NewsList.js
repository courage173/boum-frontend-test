import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import CoverSection from "./CoverSection";
import TrendingNews from "./TrendingNews";
import { getNews, loadMore } from "../../redux/action/news";

const NewsList = ({ getNews, news, navigation, loadMore, loadingMoreNews }) => {
  useEffect(() => {
    getNews();
  }, []);

  const handleMore = () => {
    const count = news.count;
    const articleLength = news.articles && news.articles.length;

    if (count > articleLength) {
      const nextPage = Math.ceil(count / articleLength);
      loadMore();
      getNews(nextPage);
    }
  };
  const topNews = news.articles && news.articles[0];
  return (
    <View style={styles.container}>
      <ScrollView>
        <CoverSection article={topNews} />
        <TrendingNews news={news} navigation={navigation} />
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity style={styles.button} onPress={handleMore}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#631a63" }}>
              {loadingMoreNews ? "Loading" : "Load More"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flex: 1,
    height: "100%",
    backgroundColor: "#f5f5f5",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#631a63",
  },
});

const mapStateToProps = (state) => {
  return {
    news: state.news.newsList,
    loadingMoreNews: state.news.loadingMore,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getNews, loadMore }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
