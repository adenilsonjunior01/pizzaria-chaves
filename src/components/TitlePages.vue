<template>
  <div class="title animate__animated animate__fadeInLeft">
    <img src="../assets/icons/pizza-icon.png" alt="Icon Contato">
    <h1 class="pl-3">{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: 'TitlePages',
  props: ['title']
}
</script>
<style scoped>

.title {
  @apply ml-10 text-xl uppercase font-semibold p-2 pl-6 border-l-4 inline-flex items-center;
  color: #FCF6EC;
  background-color: #242424;
  width: 190px;
  border-color: #FAB940;
}

.endereco h1, .telefone h1 {
  @apply uppercase text-xl font-semibold;
}

.contato h1 {
  @apply mb-2;
  color: #444342;
}

.contato p, .contato a {
  @apply font-normal tracking-wider;
  color: #5D5C5A;
}
</style>