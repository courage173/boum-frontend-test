import { random } from "../../utils/randomNumber";
import * as types from "../constants/news";
const initialState = {
  getNews: {
    requesting: false,
    error: null,
    success: false,
  },
  newsList: { articles: [] },
  currentNews: {},
  loadingMore: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.GET_NEWS_REQUEST:
      return Object.assign({}, state, {
        getNews: {
          requesting: true,
          error: null,
          success: false,
        },
      });
    case types.GET_NEWS_SUCCESS:
      return Object.assign({}, state, {
        getNews: {
          requesting: false,
          error: null,
          success: true,
        },
        loadingMore: false,
        newsList: {
          count: action.payload.totalResults,
          articles: state.newsList.articles.concat(
            action.payload.articles.map((article, i) => {
              article.id = String(article.publishedAt) + i;
              article.liked = false;
              article.likedCount = random(200);
              return article;
            })
          ),
        },
      });
    case types.GET_NEWS_FAILURE:
      return Object.assign({}, state, {
        getNews: {
          requesting: false,
          error: action.payload,
          success: false,
        },
        loadingMore: false,
      });
    case types.ADD_NEWS_TO_STORE:
      return Object.assign({}, state, {
        singleNews: action.payload,
      });
    case types.LOAD_MORE_NEWS:
      return Object.assign({}, state, {
        loadingMore: true,
      });
    case types.LIKE_NEWS:
      return Object.assign({}, state, {
        newsList: {
          ...state.newsList,
          articles: state.newsList.articles.map((article, i) => {
            article.id = String(article.publishedAt) + i;
            if (article.id === action.payload) {
              article.liked = article.liked ? false : true;
              article.likedCount = article.liked
                ? article.likedCount + 1
                : article.likedCount - 1;
              return article;
            }
            return article;
          }),
        },
      });
    default:
      return state;
  }
}
