<template>
  <div class="home">
    <div id="titulo" class="heading text-center">
      <h1>Regeneración de Ecosistemas</h1>
    </div>
    <div id="homeForm">
      <iframe
        id="googleForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd5V_4ZrO0S-9XKJqpQWua4TXDRSPyVS5gTm0hraCvTZ5P9zA/viewform?embedded=true"
        height="75%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Cargando…</iframe>
      <b-row>
        <b-col class="text-center">
          <router-link to="/menu">Continuar</router-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
  color: white;
}

.heading {
  padding: 20px;
}

#titulo{
  color: #072D40;
  height: 15%;
}

.row{
  width: 100%;
}

.text-center {
  text-align: center !important;
}

#homeForm {
  height: 85%;
  width: 100%;
}

#googleForm {
  width: 85%;
}

@media (max-width: 768px) {
  #googleForm {
    width: 75%;
  }
}
</style>
