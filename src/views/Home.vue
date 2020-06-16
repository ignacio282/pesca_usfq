<template>
  <div class="home">
    <div class="fullscreen-bg">
      <video class="fullscreen-bg_video" loop muted autoplay ref="video">
        <source src="../assets/video/water.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="titulo" class="heading text-center">
      <h1>Regeneración de Ecosistemas</h1>
    </div>
    <div id="homeForm">
      <iframe id="googleForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd5V_4ZrO0S-9XKJqpQWua4TXDRSPyVS5gTm0hraCvTZ5P9zA/viewform?embedded=true"
        height="75%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Cargando…</iframe>
      <br> <br>
      <b-row>
        <b-col class="text-center">
          <b-button @click="continuar" variant="primary" type="light">Continuar</b-button>
        </b-col>
      </b-row>
    </div>
    <b-container id="menu" fluid>
      <b-row id="botones" align-h="center" align-v="start">
        <b-col cols="12" sm="6" md="4" lg="2">
          Educación <br> Ambiental
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          Redes <br> Fantasma
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          Plásticos
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          Reciclaje
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          Pesca
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/media">Media</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          Videojuego
        </b-col>
      </b-row>
      <b-row id="logos" class="justify-content-md-right" align-v="end" align-h="center">
        <b-col cols="12" md="4">
          <img class="imagenes" src="../assets/logo.png">
          <img class="imagenes" src="../assets/logo.png">
          <img class="imagenes" src="../assets/logo.png">
        </b-col>
        <b-col id="contacto" cols="12" md="4">
          Contacto
        </b-col>
        <b-col cols="12" md="4">
          <img class="imagenes" src="../assets/logo.png">
          <img class="imagenes" src="../assets/logo.png">
          <img class="imagenes" src="../assets/logo.png">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    continuar: function() {
      document.getElementById("homeForm").style.display = "none";
      document.getElementById("titulo").style.display = "none";
      document.getElementById("menu").style.display = "block";
    }
  }
};
</script>

<style lang='scss' scoped>
.home {
  height: 83%;
}

.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
}

.fullscreen-bg_video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
    background: url("../assets/logo.png") center center / cover no-repeat;
  }

  .fullscreen-bg__video {
    display: none;
  }
}

.heading {
  padding: 20px;
}

.text-center {
  text-align: center !important;
}

#homeForm {
  height: 100%;
  width: 100%;
}

#googleForm{
  width: 85%;
}

@media (max-width: 768px) {
  #googleForm{
    width: 75%;
  }
}

#menu {
  display: none;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
}

#botones{
  min-height: 28rem;
  font-size: 150%;
}

#logos{
  height: 10rem;
}

@media (max-width: 400px){
  #logos{
    margin-top: 100px;
  }

  #menu{
    padding-top: 25px;
  }
}

#contacto{
  font-size: 125%;
  padding-bottom: 25px;
}

.imagenes{
  padding-right: 10px;
  padding-bottom: 10px;
  width: 12%;
}

@media (max-width: 576px){
  #logos{
    margin-top: 275px;
  }
}

@media (min-width: 576px) and (max-width: 768px){
  #logos{
    margin-top: 275px;
  }

  #contacto{
    padding-bottom: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1200px){
  #logos{
    margin-top: 600px;
  }

  #contacto{
    padding-bottom: 15px;
  }

}
</style>
