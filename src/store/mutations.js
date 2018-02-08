import * as types from "./mutation-types";

export default {
  [types.IS_LOADING](state, isLoading) {
    state.isLoading = isLoading;
  },

  [types.SET_FEEDS](state, feeds) {
    state.feeds = feeds;
  },

  [types.SET_SELECTED_ARTICLE](state, article) {
    state.selectedArticle = article;
  },

  [types.SET_SELECTED_FEED](state, feed) {
    state.selectedFeed = feed;
  }
};
