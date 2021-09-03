<template>
  <div class="pizzas">
    <div v-for="pizza in pizzas">
      <div class="pizza">
        <div class="pizza__description">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FotoGaleria",
  props: ['pizzas'],
  mounted() {
    console.log(this.pizzas)
  }
}
</script>

<style scoped lang="scss">

</style>