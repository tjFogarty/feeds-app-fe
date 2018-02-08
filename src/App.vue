<template>
  <div id="app">
    <div v-if="isLoading">
      Loading...
    </div>
    
    <div v-else>
      <b-list-group v-if="feeds && feeds.length">
        <b-list-group-item v-for="feed in feeds" :key="feed.title">
          <a href="#" @click.prevent="selectFeed(feed.title)">
            {{ feed.title }}
          </a>
        </b-list-group-item>
      </b-list-group>
      
      <b-list-group v-if="selectedFeed && selectedFeed.items.length">
        <b-list-group-item v-for="item in selectedFeed.items" :key="item.title">
          <a href="#" @click.prevent="selectArticle(item)">
            {{ item.title }}
          </a>
        </b-list-group-item>
      </b-list-group>
      
      <div v-if="selectedArticle">
        <div v-html="selectedArticle.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "app",

  computed: {
    ...mapState(["feeds", "isLoading", "selectedFeed", "selectedArticle"])
  },

  methods: {
    ...mapActions(["getFeeds", "selectFeed", "selectArticle"])
  },

  mounted() {
    this.getFeeds();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
