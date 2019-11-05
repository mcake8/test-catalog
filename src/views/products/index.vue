<template>
  <catalog-grid :products="products" />
</template>

<script>
import { data } from "$root/products.json";

export default {
  name: "Catalog",
  computed: {
    products() {
      let productsData = this.$route.query.category
        ? data.products.filter(
            i => i.subcategory_code == this.$route.query.category
          )
        : data.products;

      return productsData.sort((a, b) => a.sort - b.sort);
    }
  },
  components: {
    CatalogGrid: () => import("@/components/CatalogGrid")
  }
};
</script>