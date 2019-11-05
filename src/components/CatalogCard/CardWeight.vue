<template>
  <label class="radio-check">
    <input type="radio" class="radio-check__input" :name="name" :value="val" v-model="isChecked" />
    <div class="radio-check__visual">
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  name: "card-weight",
  props: ["value", "name", "val"],
  computed: {
    isChecked: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.radio-check {
  cursor: pointer;
  margin: 0 7.5px 4px;
  &__visual {
    opacity: 0.5;
    border: 2px solid #000000;
    border-radius: 10px;
    font-weight: 600;
    padding: 9px 15px 8px;
    line-height: 19px;
    display: inline-block;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.5);
  }
  &__input {
    display: none;
    &:checked ~ .radio-check__visual {
      color: #3dadd2;
      border: 2px solid #3dadd2;
      opacity: 1;
      border-radius: 10px;
    }
  }
}
</style>