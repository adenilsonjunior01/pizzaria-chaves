<template>
    <div class="grid grid-flow-col grid-menu-nav h-screen">
      <div class="content z-50" :class="{'open': showNav}">
        <div class="content__btn-logo">
          <button @click="showNav = !showNav" id="btn-mobile">
            <span id="hamburguer"></span>
          </button>
          <router-link to="/"><img src="../src/assets/logo.png" alt="Logo - Pizzaria e Lanchonete do Chaves">
          </router-link>
        </div>

        <!-- Menu de Navegação - Mobile -->
        <MenuNavigationMobile
            v-if="mobileView"
            :is-open="showNav"
            class="-translate-x-full"
            @closeMenu="showNav = $event"
            :class="{'open-menu animate__animated animate__fadeInLeft': showNav}"/>
      </div>

      <!-- Menu de Navegação -->
      <Navigation id="menu" />

      <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "./pages/Navigation.vue";
import MenuNavigationMobile from "./components/MenuNavigationMobile.vue";
import Home from "./pages/Home.vue";

export default defineComponent({
  name: 'App',
  components: {
      Navigation,
      Home,
      MenuNavigationMobile
  },
  data: () => {
    return {
      mobileView: false,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  created() {
    this.handleView();
  }
})
</script>
<style scoped lang="scss">
.grid-menu-nav {
  grid-template-columns: 240px auto;
}

main {
  grid-area: main;
}

.content {
  @apply absolute w-full h-auto;

  &__btn-logo {
    @apply flex items-center mb-2;
  }
}

.open-menu {
  @apply -translate-x-0;
  animation-duration: 400ms;
}

button {
  color: #FCF6EC;
  @apply flex;
}

#btn-mobile {
  display: flex;
  padding: .5rem 1rem;
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
}

#hamburguer {
  width: 20px;
  display: block;
  border-top: 2px solid #FFF;

  &:after, &:before  {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    margin-top: 5px;
    transition: .3s;
    position: relative;
  }
}

.content.open #hamburguer {
  border-top-color: transparent;

  &:before {
    transform: rotate(135deg);
  }

  &:after {
    transform: rotate(-135deg);
    top: -7px;
  }
}


@media (max-width: 640px) {
  #btn-mobile {
    display: flex;
  }

  #menu {
    display: none;
  }

  .grid-menu-nav {
    grid-template-columns: auto !important;
  }
}

img {
  @apply ml-3 mt-2;
  height: 35px;
}
</style>
