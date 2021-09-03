<template>
  <nav>
    <ul>
      <router-link to="/" tag="li" active-class="active" exact @click="closeMenu()"><a>Início</a></router-link>
      <router-link to="/cardapio" tag="li" active-class="active" @click="closeMenu()"><a>Cardápio</a></router-link>
      <router-link to="/pizzas" tag="li" active-class="active" @click="closeMenu()"><a>Pizzas</a></router-link>
      <router-link to="/contato" tag="li" active-class="active" @click="closeMenu()"><a>Contato</a></router-link>
    </ul>
    <SocialMedia :isVisible="false"/>
  </nav>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  name: "MenuNavigationMobile",
  props: ['isOpen'],
  components: {SocialMedia},
  methods: {
    closeMenu() {
      this.$emit('closeMenu', false);
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    @apply w-full;
    background-image: url("../assets/images/bg-menu.jpg");
  }

  ul {
    color: #FCF6EC;
    @apply grid p-6 pb-0 uppercase;

    a {
      @apply py-2;
    }
  }

  .footer {
    width: 100% !important;
  }
</style>