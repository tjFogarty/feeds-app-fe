<template>
  <div id="app">
    <TitleBar />
    <FeedReader />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Loading from "./components/Loading.vue";
import FeedReader from "./features/feed/index.vue";
import TitleBar from "./components/TitleBar.vue";

export default {
  name: "app",

  components: { Loading, FeedReader, TitleBar }
};
</script>

<style>
:root {
  --c-primary: #ff3b3f;
  --c-text: #2c3e50;
  --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app {
  font-family: var(--font-stack);
  color: var(--c-text);
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: var(--c-primary);
  transition: color ease 0.3s;
}

a:hover,
a:focus {
  color: var(--c-text);
}

body {
  transition: background ease 0.3s, color ease 0.3s;
}

.is-dark-theme {
  background-color: #282c34;
  --c-text: #fff;
  --c-primary: #bc75de;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
