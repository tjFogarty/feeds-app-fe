<template>
  <div class="theme-select">
    Dark Theme:
    <button class="theme-select__switch" @click="toggleTheme" role="switch" :aria-checked="isDarkTheme ? 'true' : 'false'">
      <div v-show="!isDarkTheme">
        <i class="fas fa-toggle-off" />
      </div>
      
      <div v-show="isDarkTheme">
        <i class="fas fa-toggle-on" />
      </div>
    </button>
  </div>
</template>

<script>
import { loadSyntaxHighlighterStyles } from "../features/feed/utils";

export default {
  name: "ThemeSelect",

  data() {
    return {
      isDarkTheme: false
    };
  },

  methods: {
    toggleTheme() {
      let body = document.body;

      body.classList.toggle("is-dark-theme");

      if (body.classList.contains("is-dark-theme")) {
        this.isDarkTheme = true;
      } else {
        this.isDarkTheme = false;
      }

      loadSyntaxHighlighterStyles();
    }
  }
};
</script>

<style scoped>
.theme-select {
  display: flex;
  align-items: center;
}

.theme-select__switch {
  font-size: 1.4em;
  background: none;
  border: none;
  outline: none;
  color: var(--c-primary);
  cursor: pointer;
}
</style>
