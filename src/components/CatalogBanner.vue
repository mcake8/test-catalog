<template>
  <section class="catalog-banner">
    <div class="catalog-banner__head">Рецепт дня</div>
    <div class="catalog-banner__content">
      <div class="catalog-banner__img">
        <img src="@/assets/img/salad.jpg" />
      </div>
      <div class="catalog-banner__info">
        <div class="catalog-banner__title">
          Крабовый салат с кукурузой
          и кукурузной заправкой
        </div>
        <p
          class="catalog-banner__text"
        >Полезные и доступные продукты являются эталоном качества с советских времен. Консервированные овощи</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "catalog-banner"
};
</script>

<style lang="less" scoped>
.catalog-banner {
  width: 660px;
  padding-left: 15px;
  &__head {
    font-size: 42px;
    line-height: 50px;
    text-transform: uppercase;
    position: relative;
    padding: 8px 15px 32px;
    font-family: "MyriadPro-SemiCn";
    color: #2d2d2d;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 32px;
      width: 151px;
      border-top: 2px solid #32ac56;
      border-left: 2px solid #32ac56;
    }
  }
  &__content {
    display: flex;
  }
  &__img {
    width: 298px;
    height: 343px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    img {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &__info {
    padding: 59px 0px 0px 32px;
  }
  &__title {
    font-family: "MyriadPro-SemiCn";
    font-weight: 700;
    margin-bottom: 28px;
    position: relative;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 26px;
    color: #333333;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 28px;
      height: 7px;
      background-color: #5c9b4f;
    }
  }
  &__text {
    font-family: "MyriadPro-SemiCn";
    color: #4a4a4a;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>