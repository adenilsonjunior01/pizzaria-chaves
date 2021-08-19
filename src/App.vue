<template>
    <div class="grid grid-flow-col grid-menu-nav h-screen">
        <Navigation />
        <router-view></router-view>
<!--      <transition mode="out-in"-->
<!--        enter-active-class="animate__animated animate__fadeInLeftBig"-->
<!--        leave-active-class="animate__animated animate__fadeOutRightBig">-->
<!--      </transition>-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "./pages/Navigation.vue";
import Home from "./pages/Home.vue";

export default defineComponent({
  name: 'App',
  components: {
      Navigation,
      Home
  }
})
</script>
<style scoped>
.grid-menu-nav {
    grid-template-columns: 240px auto;
}

main {
  grid-area: main;
}
</style>
