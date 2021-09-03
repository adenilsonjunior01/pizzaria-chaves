<template>
  <div class="bg-contato">
    <TitlePages title="Contato"/>
    <div class="contato animate__animated animate__fadeInLeft">
      <div class="endereco mt-5">
        <h1>Endereço</h1>
        <p>Rua 10, Crispim Santana, Estabelecimento 30</p>
        <p>Arinas, Minas Gerais - MG</p>
      </div>
      <div class="telefone mt-8">
        <h1>Telefone/Disk-entrega</h1>
        <a href="tel:38998986551"><strong>Número /</strong> (38) 9 9898-6551</a>
        <p><strong>E-mail /</strong></p>
      </div>
      <div class="telefone mt-8">
        <h1>Horário de Funcionamento</h1>
        <p><strong>Seg - Sex /</strong> 18h00 - 00h00</p>
        <p><strong>Closed</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePages from "../components/TitlePages.vue";

export default {
  name: "Contato",
  components: {TitlePages}
}
</script>

<style scoped>
.bg-contato {
  @apply overflow-hidden pt-20;
  background-image: url("/src/assets/images/bg-contato.jpg");
  background-size: cover;
}

.contato {
  @apply md:w-5/12 sm:w-11/12  px-10 py-2 pb-5;
  background-color: #FCF6EC;
  margin-bottom: 20px;
}

.endereco h1, .telefone h1 {
  @apply uppercase text-xl font-semibold;
}

.contato h1 {
  @apply mb-2;
  color: #444342 ;
}

.contato p, .contato a {
  @apply font-normal tracking-wider;
  color: #5D5C5A;
}
</style>