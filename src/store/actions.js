import * as types from "./mutation-types";
import axios from "axios";

const endpoint = "http://localhost:5000";

export default {
  async getFeeds({ commit }) {
    commit(types.IS_LOADING, true);
    let { data } = await axios(endpoint);

    commit(types.SET_FEEDS, data);
    commit(types.IS_LOADING, false);
  },

  selectFeed({ commit, state }, feedTitle) {
    let feed = state.feeds.find(feed => feed.title === feedTitle);
    commit(types.SET_SELECTED_ARTICLE, null);
    commit(types.SET_SELECTED_FEED, feed);
  },

  selectArticle({ commit }, article) {
    commit(types.SET_SELECTED_ARTICLE, article);
  }
};
