<template>
  <div id="app">
    <router-view/>
    <default-tab-bar/>
  </div>
</template>

<script>
import DefaultTabBar from "@/components/DefaultTabBar.vue";

export default {
  name: "App",
  components: {
    DefaultTabBar
  }
}
</script>


<style>
@import "./assets/css/base.css";

</style>
