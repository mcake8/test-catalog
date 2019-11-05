<template>
  <div class="rating-row">
    <i
      class
      v-for="index in 5"
      :key="index"
      :class="['icon icon-star', {'icon-star_glow': index <= parseRate}]"
    ></i>
  </div>
</template>

<script>
export default {
  name: "card-rating",
  props: ["rate"],
  computed: {
    parseRate() {
      return Math.round(+this.rate);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/mixins.less";
.rating-row {
  display: flex;
  justify-content: center;
}
.icon-star {
  .svg-in(@name: star, @pos: background, @fill: #000);
  opacity: 0.2;
  width: 14px;
  height: 14px;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
  &_glow {
    opacity: 1;
    .svg-in(@name: star, @pos: background, @fill: #ffd300);
  }
}
</style>