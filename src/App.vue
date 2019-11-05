<template>
  <div id="app">
    <catalog-nav />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",

  components: {
    CatalogNav: () => import("@/components/CatalogNav")
  }
};
</script>

<style lang="less">
@import "./assets/styles/main.less";
</style>
