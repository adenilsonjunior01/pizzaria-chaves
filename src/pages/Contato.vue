<template>
  <div class="bg-contato">
    <div class="title animate__animated animate__fadeInLeft">
      <img src="../assets/icons/pizza-icon.png" alt="Icon Contato">
      <h1 class="pl-3">Contato</h1>
    </div>
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
export default {
  name: "Contato"
}
</script>

<style scoped>
.bg-contato {
  @apply overflow-hidden pt-20;
  background-image: url("src/assets/images/bg-contato.jpg");
  background-size: cover;
}

.title {
  @apply ml-10 text-xl uppercase font-semibold p-2 pl-6 border-l-4 inline-flex items-center;
  color: #FCF6EC;
  background-color: #242424;
  width: 190px;
  border-color: #FAB940;
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