import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/products"
  },
  {
    path: "/products",
    component: () => import("@/views/products/index.vue")
  },
  {
    path: "/products/:name",
    component: () => import("@/views/products/_name")
  }
];

const router = new VueRouter({
  routes
});

export default router;
