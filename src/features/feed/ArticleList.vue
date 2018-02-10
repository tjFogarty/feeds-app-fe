<template>
  <transition name="slide-fade">
    <div v-if="selectedFeed && selectedFeed.items.length" class="article-list-container">
      <h2>Articles</h2>    
      <ul class="article-list">
        <li v-for="item in selectedFeed.items" :key="item.title">
          <a href="#" @click.prevent="selectArticle(item)" :class="isActive(item.title)">
            {{ item.title }} <i class="fas fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ArticleList",

  computed: {
    ...mapState(["selectedFeed", "selectedArticle"])
  },

  methods: {
    ...mapActions(["selectArticle"]),

    isActive(title) {
      if (!this.selectedArticle) return "";

      return title === this.selectedArticle.title ? "is-active" : "";
    }
  }
};
</script>

<style scoped>
.article-list-container {
  position: sticky;
  top: 0;
}

.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
}

.is-active {
  color: var(--c-text);
}
</style>
