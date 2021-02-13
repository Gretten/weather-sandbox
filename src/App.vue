<template>
  <div id="app">
    <Page />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

</style>

<script>
import Page from '@/views/Page.vue';

export default {
  components: {
    Page
  },
};
</script>
