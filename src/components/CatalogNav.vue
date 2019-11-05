<template>
  <nav class="catalog-nav">
    <router-link to="/products?category=1" class="nav-item">
      <i class="nav-item__icon icon-snack"></i>
      Галеты
    </router-link>
    <router-link to="/products?category=2" class="nav-item">
      <i class="nav-item__icon icon-mix"></i>
      Моно и
      <br />овощные смеси
    </router-link>
    <router-link to="/products?category=3" class="nav-item">
      <i class="nav-item__icon icon-food"></i>Готовые блюда
    </router-link>
    <router-link to="/products?category=4" class="nav-item">
      <i class="nav-item__icon icon-barbecue"></i>Овощи-гриль
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "catalog-nav"
};
</script>

<style lang="less" scoped>
@import url("~@/assets/styles/mixins.less");
.icon-snack {
  .svg-in(@name: snack, @fill: #00b0d6, @pos: background, @bsize: 37px);
}
.icon-mix {
  .svg-in(@name: mix, @fill: #00b0d6, @pos: background, @bsize: 44px);
}
.icon-food {
  .svg-in(@name: food, @fill: #00b0d6, @pos: background, @bsize: 41px);
}
.icon-barbecue {
  .svg-in(@name: barbecue, @fill: #00b0d6, @pos: background, @bsize: 37px);
}
.catalog-nav {
  position: fixed;
  left: 0;
  top: 49px;
}
.nav-item {
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  color: #00b0d6;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  margin-bottom: 8px;
  border-radius: 0 10px 10px 0;
  padding: 0px 10px 6px;
  width: 133px;
  min-height: 88px;
  transition: 0.2s linear width;
  &__icon {
    display: block;
    height: 58px;
  }
  &.router-link-exact-active,
  &:hover {
    background: #61b78a;
    color: #fff;
    width: 156px;
    .icon-snack {
      .svg-in(@name: snack, @fill: #fff, @pos: background, @bsize: 37px);
    }
    .icon-mix {
      .svg-in(@name: mix, @fill: #fff, @pos: background, @bsize: 44px);
    }
    .icon-food {
      .svg-in(@name: food, @fill: #fff, @pos: background, @bsize: 41px);
    }
    .icon-barbecue {
      .svg-in(@name: barbecue, @fill: #fff, @pos: background, @bsize: 37px);
    }
  }
}
</style>