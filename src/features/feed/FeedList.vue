<template>
  <div class="feed-list-container">
    <h2>Feeds</h2>
    <ul v-if="feeds && feeds.length" class="feeds">
      <li v-for="feed in feeds" :key="feed.title">
        <a href="#" @click.prevent="selectFeed(feed.title)" :class="isActive(feed.title)">
          {{ feed.title }} <i class="fas fa-angle-right" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FeedList",

  computed: {
    ...mapState(["feeds", "selectedFeed"])
  },

  methods: {
    ...mapActions(["selectFeed"]),

    isActive(title) {
      if (!this.selectedFeed) return "";

      return title === this.selectedFeed.title ? "is-active" : "";
    }
  }
};
</script>

<style scoped>
.feed-list-container {
  position: sticky;
  top: 0;
}

.feeds {
  list-style: none;
  margin: 0;
  padding: 0;
}

.is-active {
  color: var(--c-text);
}

li {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
}
</style>
