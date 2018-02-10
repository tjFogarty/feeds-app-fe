<template>
  <div class="title-bar">
    <div>  
      <h1 class="title-bar__heading">
        <i class="title-bar__icon fas fa-rss" aria-hidden="true" />
        Feed Reader
      </h1>
      
      <ThemeSelect />
    </div>
    
    
    <a href="https://github.com/tjFogarty/feeds-app-fe" target="_blank" rel="noopener" class="title-bar__source-link">
      <i aria-hidden="true" class="fas fa-code" />
    </a>
  </div>
</template>

<script>
import ThemeSelect from "./ThemeSelect.vue";

export default {
  name: "TitleBar",

  components: { ThemeSelect }
};
</script>

<style scoped>
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.title-bar__icon {
  color: var(--c-primary);
}

.title-bar__subheading,
.title-bar__heading {
  margin: 0;
}

.title-bar__source-link {
  color: var(--c-primary);
  transition: color ease 0.3s;
}

.title-bar__source-link:hover {
  color: var(--c-text);
}
</style>
