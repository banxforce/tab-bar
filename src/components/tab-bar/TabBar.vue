<template>
   <div id="tab-bar">
      <tab-bar-item link="/home">
         <template v-slot:item-icon>
            <img src="../../assets/img/tabbar/home.svg" />
         </template>
         <template v-slot:item-icon-active>
            <img src="../../assets/img/tabbar/home_active.svg" />
         </template>
         <template v-slot:item-text> <div>首页</div> </template>
      </tab-bar-item>

      <tab-bar-item link="/category">
         <template v-slot:item-icon>
            <img src="../../assets/img/tabbar/category.svg" />
         </template>
         <template v-slot:item-icon-active>
            <img src="../../assets/img/tabbar/category_active.svg" />
         </template>
         <template v-slot:item-text> <div>分类</div> </template>
      </tab-bar-item>

      <tab-bar-item link="/cart">
         <template v-slot:item-icon>
            <img src="../../assets/img/tabbar/shopcart.svg" />
         </template>
         <template v-slot:item-icon-active>
            <img src="../../assets/img/tabbar/shopcart_active.svg" />
         </template>
         <template v-slot:item-text> <div>购物车</div> </template>
      </tab-bar-item>

      <tab-bar-item link="/profile">
         <template v-slot:item-icon>
            <img src="../../assets/img/tabbar/profile.svg" />
         </template>
         <template v-slot:item-icon-active>
            <img src="../../assets/img/tabbar/profile_active.svg" />
         </template>
         <template v-slot:item-text> <div>我的</div> </template>
      </tab-bar-item>
   </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";

export default {
   components: { TabBarItem },
   name: "TabBar",

   data() {
      return {};
   },

   mounted() {},

   methods: {},
};
</script>

<style scoped>
#tab-bar {
   display: flex;
   background-color: #f6f6f6;

   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;

   box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.1);
}
</style>
