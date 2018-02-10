<template>
  <transition name="slide-fade">  
    <div v-if="selectedArticle" class="article">
      <h2 ref="articleTitle" class="article__title">{{ selectedArticle.title }}</h2>
      
      <div v-html="selectedArticle.content" />
      
      <a :href="articleLink" target="_blank" rel="noopener">View original. <i class="fas fa-external-link-alt" /></a>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import { loadSyntaxHighlighterStyles } from "./utils";

export default {
  name: "SingleArticle",

  computed: {
    ...mapState(["selectedArticle"]),

    articleLink() {
      if (!this.selectedArticle) return "";
      let { guid, link } = this.selectedArticle;

      if (guid) return guid;

      return link;
    }
  },

  watch: {
    selectedArticle(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.scrollToArticle();
          this.highlightCode();
        });
      }
    }
  },

  methods: {
    scrollToArticle() {
      if (window.scrollY < 85) return;

      let scrollTo = this.$refs.articleTitle.offsetTop;

      window.scroll({
        behavior: "smooth",
        top: scrollTo
      });
    },

    async highlightCode() {
      let codeBlocks = document.querySelectorAll("pre code");

      if (codeBlocks && codeBlocks.length) {
        loadSyntaxHighlighterStyles();

        let hljs = await import("highlight.js");

        codeBlocks.forEach(block => {
          hljs.highlightBlock(block);
        });
      }
    }
  }
};
</script>
