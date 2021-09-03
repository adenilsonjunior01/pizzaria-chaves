<template>
  <div class="bg-cardapio ">
    <TitlePages title="Cardápio"/>
    <CardapioPizzas
        :menu="menu"
        :acrescimos="acrescimos"
        class="animate__animated animate__fadeInLeft"/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {MockCardapio} from "../mocks/mock-cardapio";
import CardapioPizzas from "../components/layout/CardapioPizzas.vue";
import TitlePages from "../components/TitlePages.vue";

export default defineComponent({
  name: "Cardapio",
  components: {CardapioPizzas, TitlePages},
  data () {
    return {
      menu: [],
      acrescimos: []
    }
  },
  mounted() {
    const cardapio = new MockCardapio();
    this.menu = cardapio.cardapio();
    this.acrescimos = cardapio.opcoesBorda();
  }
})
</script>

<style scoped lang="css">
  .bg-cardapio {
    @apply pt-20;
    background-image: url("/src/assets/images/bg-cardapio.jpg");
    background-size: cover;
    background-attachment: fixed;
  }

  .title {
    @apply ml-10 text-xl uppercase font-semibold p-2 pl-6 border-l-4 inline-flex items-center;
    color: #FCF6EC;
    background-color: #242424;
    width: 190px;
    border-color: #FAB940;
  }

</style>