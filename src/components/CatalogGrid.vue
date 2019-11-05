<template>
  <section class="container">
    <div class="wrap-flex">
      <catalog-card v-for="card in cardsProxy[0]" :key="card.id" :card="card" />
      <catalog-banner />
      <catalog-card v-for="card in cardsProxy[1]" :key="card.id" :card="card" />
    </div>
  </section>
</template>
<script>
export default {
  name: "catalog-grid",
  props: ["products"],
  computed: {
    cardsProxy() {
      return [
        this.products.slice(0, 3),
        this.products.slice(3, this.products.length)
      ];
    }
  },
  components: {
    CatalogCard: () => import("@/components/CatalogCard/index.vue"),
    CatalogBanner: () => import("@/components/CatalogBanner")
  }
};
</script>

<style lang="less" scoped>
.wrap-flex {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0px 100px;
}
</style>