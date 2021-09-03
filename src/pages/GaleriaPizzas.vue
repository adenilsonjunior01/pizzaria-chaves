<template>
  <div class="content">
    <TitlePages title="Pizzas"/>
    <div class="content__galeria animate__animated animate__fadeInLeft">
      <FotoGaleria :pizzas="pizzas"/>
    </div>
  </div>
</template>

<script>
import TitlePages from "../components/TitlePages.vue";
import FotoGaleria from "../components/layout/FotoGaleria.vue";
import {MockFotos} from "../mocks/mock-fotos";

export default {
  name: "GaleriaPizzas",
  components: {TitlePages, FotoGaleria},
  data () {
    return {
      pizzas: []
    }
  },
  mounted() {
    this.pizzas = new MockFotos().fotos();
  }
}
</script>

<style scoped lang="scss">

.content {
  @apply overflow-hidden pt-20 relative;
  background-image: url("/src/assets/images/bg-galeria.jpg");
  background-size: cover;

  span {
    display: block;
  }

  &__galeria {
      @apply px-10 py-2 pb-5;
      background-color: #FCF6EC;
      margin-bottom: 20px;
  }
}

</style>