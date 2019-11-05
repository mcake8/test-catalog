<template>
  <div class="prod-card">
    <div class="prod-card__bage" v-if="card.new">NEW</div>

    <div class="prod-card__img">
      <img :src="`${publicPath}${card.image}`" :title="card.name" />
    </div>
    <div class="prod-card__options" v-if="card">
      <card-weight
        v-for="weight in card.weights"
        :key="weight.weight + card.id"
        :name="weight.weight + card.id"
        :val="weight.weight"
        v-model="selectedWeight"
      >{{weight.weight}} г</card-weight>
    </div>
    <div class="prod-card__price">{{price}}</div>
    <div class="prod-card__button-row">
      <router-link :to="card.link" class="prod-card__button">купить</router-link>
    </div>

    <card-rating :rate="card.rating" />
  </div>
</template>

<script>
export default {
  name: "catalog-card",
  props: ["card"],
  data() {
    return {
      currentWeight: {},
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    selectedWeight: {
      get() {
        let wObj =
          this.getWeightObj(this.currentWeight.weight) || this.card.weights[0];
        return wObj.weight;
      },
      set(value) {
        this.currentWeight = this.getWeightObj(value);
      }
    },
    price() {
      let priceVal = this.currentWeight.weight
        ? this.currentWeight.price
        : this.card.weights[0].price;

      return priceVal ? `${priceVal} Р` : "--";
    }
  },
  methods: {
    getWeightObj(target) {
      return this.card.weights.find(i => i.weight === target);
    }
  },
  components: {
    CardWeight: () => import("./CardWeight"),
    CardRating: () => import("./CardRating")
  }
};
</script>

<style lang="less" scoped>
.prod-card {
  border-radius: 10px;
  width: 300px;
  margin: 0 15px;
  position: relative;
  padding: 10px 0 37px;
  margin-bottom: 14px;
  &:hover {
    box-shadow: 0px 2px 29px rgba(0, 0, 0, 0.0699028);
    z-index: 2;
  }
  &__bage {
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background: #3dadd2;
    border-radius: 16px;
    position: absolute;
    padding: 4px 18px 8px;
    top: 12px;
    right: 14px;
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 300px;
    }
  }
  &__options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 15px;
  }
  &__price {
    color: #3dadd2;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }
  &__button-row {
    text-align: center;
    padding: 10px 0px 13px;
  }
  &__button {
    display: inline-block;
    text-align: center;
    background: linear-gradient(180deg, #3fb8dc 0%, #08a6ce 100%);
    box-shadow: 0px 2px 0px #068fb5;
    border-radius: 2px;
    font-weight: 700;
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    padding: 15px 10px 8px;
    min-width: 160px;
    &:hover {
      background: linear-gradient(
        180deg,
        darken(#3fb8dc, 8%) 0%,
        darken(#08a6ce, 8%) 100%
      );
    }
  }
}
</style>