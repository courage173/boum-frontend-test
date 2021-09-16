import * as types from "../constants/news";
import axios from "axios";

export const getNewsRequest = () => {
  return {
    type: types.GET_NEWS_REQUEST,
  };
};

export const getNewsSuccess = (payload) => {
  return {
    type: types.GET_NEWS_SUCCESS,
    payload,
  };
};

export const getNewsFailure = (payload) => {
  return {
    type: types.GET_NEWS_FAILURE,
    payload,
  };
};

export const getNews = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(getNewsRequest());
      const Data = await axios({
        url: `https://newsapi.org/v2/top-headlines?country=ng&page=${page}&apiKey=eb5f51a148844a429b71e50579e632ae`,
        method: "GET",
      });
      const news = Data.data;
      dispatch(getNewsSuccess(news));
      return news;
    } catch (error) {
      console.log(error);
      dispatch(getNewsFailure(error));
      return error;
    }
  };
};

export const addNewsToStore = (payload) => {
  return {
    type: types.ADD_NEWS_TO_STORE,
    payload,
  };
};

export const loadMore = () => {
  return {
    type: types.LOAD_MORE_NEWS,
  };
};

export const likeArticle = (payload) => {
  return {
    type: types.LIKE_NEWS,
    payload,
  };
};
