<template>
  <div class="cardapio" >
    <div v-for="item in menu" :key="item.id" class="py-3">
      <div class="titulo">
        <h3>{{ item.sabor }}</h3>
        <div class="flex">
          <div v-for="sabor in item.tamanhos" :key="sabor.id">
            <span class="fatias">{{sabor.descricao}}</span>
            <h2  class="px-2">
              {{ sabor.valor }}
            </h2>
          </div>
        </div>
      </div>
      <div class="descricao">
        <span>{{ item.ingredientes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardapioPizzas",
  props:['menu']
}
</script>

<style scoped lang="css">
.cardapio {
  @apply pb-7 md:w-8/12 sm:w-11/12  px-10 py-2;
  background-color: #FCF6EC;
  margin-bottom: 20px;
}

.titulo {
  @apply flex justify-between items-center;
}

.titulo > h3 {
  @apply text-lg uppercase font-semibold tracking-wider;
  color: #242424;
}

.titulo > div > div > h2 {
  @apply font-semibold tracking-wider;
  color: #FAB940;
}

.fatias {
  @apply text-xs px-2 font-normal
}

.descricao {
  @apply font-light tracking-wider;
  color: #444342 ;

}
</style>