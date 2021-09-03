<template>
  <nav>
    <ul>
      <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>
      <router-link to="/cardapio" tag="li" active-class="active"><a>Cardápio</a></router-link>
      <router-link to="/pizzas" tag="li" active-class="active"><a>Pizzas</a></router-link>
      <router-link to="/contato" tag="li" active-class="active"><a>Contato</a></router-link>
    </ul>
  </nav>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent( {
  name: "MenuList"
})
</script>

<style scoped>
ul {
  @apply text-center uppercase font-semibold leading-7 mt-10;
  color: #FCF6EC;
}

a {
  @apply p-0.5 cursor-pointer duration-200 w-full block;
}

a:hover {
  @apply opacity-70;
}

.active {
  color: #FAB940;
}

</style>