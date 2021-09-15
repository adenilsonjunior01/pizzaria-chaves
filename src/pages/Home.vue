<template>
  <div class="bg-home">
      <img src="/src/assets/chaves-barril.png" alt="Logo - Pizzaria do Chaves" class="chaves-barril">
      <img src="/src/assets/pizza-name.svg" class="animate__animated animate__fadeInUp descrition" alt="Temos a melhor Pizza!">
<!--      <div class="text-center">-->
<!--        <button class="pedido-wpp bg-emerald-600">-->
<!--          Faça seu pedido pelo-->
<!--          <img src="/src/assets/icons/wpp.svg" alt="Faça seu pedido pelo Whatsapp"-->
<!--               class="inline-flex p-0">-->
<!--        </button>-->
<!--      </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Home"
})
</script>

<style scoped lang="scss">

.bg-home {
  height: 100%;
  background-image: url("/src/assets/images/bg-home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  font-size: 4rem;
}

img {
  @apply m-0 m-auto pb-5 ;
  animation: fadeInUp;
  animation-duration: 700ms;
}

.chaves-barril {
  @apply pb-0 pr-10 pt-8 sm:h-2 mt-10;
  height: 310px !important;
}

.pedido-wpp {
  @apply p-2 rounded text-gray-50 tracking-wide;

  img {
    @apply p-0;
  }
}

@media (max-width: 640px) {
  .descrition {
    height: 180px !important;
    @apply mt-5;
  }
}
</style>
