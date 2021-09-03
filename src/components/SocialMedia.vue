<template>
  <footer class="footer" :class="footerClass">
    <ul>
      <li v-for="item in medias" :key="item.id">
        <a href=""></a> <img :src="item.src" alt="">
      </li>
    </ul>
    <hr class="divide-yellow-800 mb-3">
    <div class="copy">
      <p>2021 - Pizzaria e Lanchonete do Chaves. Desenvolvido por
        <a href="https://github.com/adenilsonjunior01" target="_blank">Adenilson Junior</a></p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialMedia',
  props: [ 'isVisible', 'footerClass'],
  created() {
    console.log(this["isVisible"]);
    },
  data() {
    return {
      medias: [
        {
          id: 1,
          name: 'Facebook',
          src: 'src/assets/icons/facebook.svg',
          link: '',
          target: '_blank'
        },
        {
          id: 1,
          name: 'Instagram',
          src: 'src/assets/icons/instagram.svg',
          link: '',
          target: '_blank'
        },
      ] as ISocialMedia[]
    }
  }
});

interface ISocialMedia {
  id: number;
  name: string;
  src: string;
  link: string;
  target: string;
}
</script>

<style scoped>
  .footer {
    @apply w-4/5;
  }

  ul {
    @apply flex p-4  text-gray-50 justify-center;
  }

  li {
    @apply px-3;
    cursor: pointer;
  }

  svg {
    fill: #FAB940;
  }

  hr {
    border: 1px solid #FAB940;
  }

  .copy {
    @apply text-gray-50 text-xs tracking-wider text-center p-2 font-medium;
  }

  .copy p a {
    @apply underline;
  }

  .copy p a:hover {
    @apply opacity-70 duration-300;
  }
</style>