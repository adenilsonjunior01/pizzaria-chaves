<template>
  <div class="bg-menu"><!--animate__animated animate__fadeOutLeft-->
    <div id="menu">
      <img src="../assets/logo.png" alt="Logo - Pizzaria e Lanchonete do Chaves">
      <h1 class="text-logo">Pizzaria e Lanchonete do Chaves</h1>
      <MenuList/>
    </div>
    <SocialMedia :isVisible="true"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import SocialMedia from "../components/SocialMedia.vue";
import MenuList from "../components/MenuList.vue";

export default defineComponent({
  name: 'Navigation',
  components: {SocialMedia, MenuList}
})
</script>

<style scoped>

#menu {
  @apply bg-center bg-fixed;
}

.bg-menu {
  @apply h-full justify-between flex flex-col items-center z-50;
  background-image: url("../assets/images/bg-menu.jpg");
}

.text-logo {
  @apply text-gray-50 px-3 py-2 text-center text-base;
}

h1 {
  font-family: auto, serif !important;
  font-size: 22px !important;
}

img {
  @apply m-0 m-auto pt-2.5;
}
</style>
