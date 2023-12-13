<template>
   <div id="tab-bar-item" @click="toLink">
      <slot v-if="isActive" name="item-icon-active" />
      <slot v-else name="item-icon" />
      <slot name="item-text" />
   </div>
</template>

<script>
export default {
   name: "TabBarItem",

   props: {
      link: String,
   },

   data() {
      return {};
   },

   computed: {
      isActive() {
         return this.$route.path.indexOf(this.link) === 0;
      },
   },

   mounted() {},

   methods: {
      toLink() {
         this.$router.push(this.link).catch((err) => {});
      },
   },
};
</script>

<style scoped>
#tab-bar-item {
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
}

#tab-bar-item img {
   width: 24px;
   height: 24px;
   margin-top: 3px;
   vertical-align: middle;
   margin-bottom: 2px;
}
</style>
