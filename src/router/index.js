import Vue from "vue";
import VueRouter from "vue-router";

import Cart from "../views/cart/Cart.vue";
import Category from "../views/category/Category.vue";
import Home from "../views/home/Home.vue";
import Profile from "../views/profile/Profile.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/home",
      component: Home,
   },
   {
      path: "/category",
      component: Category,
   },
   {
      path: "/cart",
      component: Cart,
   },
   {
      path: "/profile",
      component: Profile,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
