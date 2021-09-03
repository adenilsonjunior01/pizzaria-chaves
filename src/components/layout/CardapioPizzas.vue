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
    <div class="acrescimos mt-3">
      <div v-for="acrecimo in acrescimos" :key="acrecimo.id">
        <h3 class="acrescimos__title">{{ acrecimo.titulo }}</h3>
        <h6  class="acrescimos__subtitle">{{ acrecimo.subtitulo }}</h6>
        <div v-for="item in acrecimo.items" :key="item.id">
          <span class="acrescimos__item">{{ item.descricao }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardapioPizzas",
  props:['menu', 'acrescimos']
}
</script>

<style scoped lang="scss">
.cardapio {
  @apply pb-7 md:w-8/12 sm:w-11/12  px-10 py-2;
  background-color: #FCF6EC;
  margin-bottom: 20px;
}

.titulo {
  @apply flex justify-between items-center;

  h3 {
    @apply text-lg uppercase font-semibold tracking-wider;
    color: #242424;
  }

  div {
    div {
      h2 {
        @apply font-semibold tracking-wider;
        color: #FAB940;
      }
    }
  }
}

.acrescimos {
  &__title {
    @apply text-lg uppercase font-semibold tracking-wider;
  }

  &__item {
    @apply text-xs font-normal tracking-wider;
    color: #444342 ;
  }
}

.fatias {
  @apply font-light px-2 font-normal flex;
}

.descricao {
  @apply font-light tracking-wider;
  color: #444342 ;
}

@media (max-width: 640px) {
  .titulo {
    @apply flex-col;
  }

  .fatias, .descricao {
    @apply text-center;
  }

  .acrescimos {
    &__title {
      @apply text-center;
    }

    &__item {
      @apply text-center block;
    }

    &__subtitle {
      @apply text-center;
    }
  }
}
</style>