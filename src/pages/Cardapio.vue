<template>
  <div class="bg-cardapio ">
    <div class="title animate__animated animate__fadeInLeft">
      <img src="../assets/icons/pizza-icon.png" alt="Icon Cardápio">
      <h1 class="pl-3">Cardápio</h1>
    </div>
    <CardapioPizzas :menu="menu" class="animate__animated animate__fadeInLeft"/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {MockCardapio} from "../mocks/mock-cardapio";
import CardapioPizzas from "../components/layout/CardapioPizzas.vue";

export default defineComponent({
  name: "Cardapio",
  components: {CardapioPizzas},
  data () {
    return {
      menu: []
    }
  },
  mounted() {
    this.menu = new MockCardapio().cardapio();
  }
})
</script>

<style scoped lang="css">
  .bg-cardapio {
    @apply pt-20;
    background-image: url("src/assets/images/bg-cardapio.jpg");
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